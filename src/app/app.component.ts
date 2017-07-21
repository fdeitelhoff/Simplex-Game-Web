import { Robot } from './robot';
import { SimplexASTVisitor } from './simplexASTVisitor';
import { SimplexParserVisitor } from './../simplex/gen/SimplexParserVisitor';
import { SimulatorError } from './simulatorError';
import { DataService } from './data.service';
import { SimplexASTListener } from './simplexASTListener';
import { SimplexErrorListener } from './simplexErrorListener';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, NgModule } from '@angular/core';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { SimplexLexer } from './../simplex/gen/SimplexLexer';
import { SimplexParser } from './../simplex/gen/SimplexParser';

import * as PIXI from 'pixi.js';
import { Subscription } from 'rxjs/Subscription';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Emulation } from 'app/emulation';

// import { Blockly } from 'node-blockly';

@Component({
  selector: 'sapt-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {
  page = 1;

  @ViewChild('canvas') editorContent: ElementRef;

  private robot: Robot;
  private app: PIXI.Application;
  private emulation: Emulation;

  private emulationStatus: string;

  private simplexErrorListener: SimplexErrorListener;
  private errors: any[];
  private _dataService: DataService;
  private _simulation: Function;
  private listener: SimplexASTListener;

  private subscription: Subscription;
  private blocklyWorkspace: any;
  private blocklyCode: string;

  private graphics: PIXI.Graphics;
  private emulationGrid: Map<number, Map<number, PIXI.Graphics>>;
  private isGridVisible: boolean;

  constructor(private dataService: DataService) {
    this.simplexErrorListener = new SimplexErrorListener();
    this._dataService = dataService;

    this.subscription = this._dataService.getMessage().subscribe(() => { this.compile(); });

    this.blocklyWorkspace = window['workspace'];
    this.blocklyWorkspace.addChangeListener((event: any) => {
      this.blocklyCode = window['blockly'].JavaScript.workspaceToCode(this.blocklyWorkspace);
    });

    this.robot = new Robot();

    this.emulation = new Emulation();
    this.emulationGrid = new Map();
    this.isGridVisible = false;
  }

  private compile() {
    const chars = new ANTLRInputStream(this._dataService.simplexCode);
    const lexer = new SimplexLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new SimplexParser(tokens);

    parser.removeErrorListeners();
    parser.addErrorListener(this.simplexErrorListener);

    this.simplexErrorListener.resetErrors();

    const result = parser.simplex();
    this.listener = new SimplexASTListener();

    ParseTreeWalker.DEFAULT.walk(this.listener, result);
    this.errors = this.simplexErrorListener.errors;

    // const visitor = new SimplexASTVisitor();
    // const r = visitor.visit(result);

    // console.log(listener.emulationCode);

    // console.log(window['workspace']);
  }

  public finish() {
    this.emulationStatus = 'Finished!';
  }

  public run() {
    try {
      this.emulationStatus = 'Running...';

      let emulatorCode = 'async function emulator() {\n';

      emulatorCode += this.blocklyCode;

      emulatorCode += '\nawait finish();';

      emulatorCode += `\n
function print(message) {
  console.log('Program Output: ' + message);
}

async function forward () {
  await sleep(500);
  robot.forward();
}

async function back () {
  await sleep(500);
  robot.back();
}

async function left () {
  await sleep(500);
  robot.left();
}

async function right () {
  await sleep(500);
  robot.right();
}

async function readSensor () {
  const position = robot.getColorSensorPosition();

  await sleep(400);

  container.highlightSensorRead(position[0], position[1]);

  const colorSensorValue = emulation.readColorSensorValue(position[0], position[1]);

  await sleep(300);

  container.removeSensorRead();

  return colorSensorValue;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function finish() {
  await sleep(500);
  container.finish();
}

}

emulator();`;

  console.log(emulatorCode);

      this._simulation = new Function('robot', 'SimulatorError', 'emulation', 'container', emulatorCode); // this.listener.emulationCode);
      const t = this._simulation(this.robot, new SimulatorError('<No Message Provided!>'), this.emulation, this);
    } catch (error) {
      console.log('error in sim: ' + error);
    }
  }

  public highlightSensorRead(x: number, y: number) {
    // console.log(`x:${x} y:${y}`);

    this.graphics = new PIXI.Graphics();
    this.graphics.lineStyle(2, 0xFF0000);
    this.graphics.drawRect(x * 64, y * 64, 64, 64);
    this.app.stage.addChild(this.graphics);
  }

  private toggleGrid() {
    if (this.isGridVisible) {
      this.removeGrid();
    } else {
      this.drawGrid();
    }

    this.isGridVisible = !this.isGridVisible;
  }

  public drawGrid() {
    if (this.emulationGrid.size === 0) {
      for (let x = 0; x <= 9; x++) {
        this.emulationGrid.set(x, new Map());

        for (let y = 0; y <= 9; y++) {
          const graphics = new PIXI.Graphics();
          graphics.lineStyle(1, 0x000000);
          graphics.drawRect(x * 64, y * 64, 64, 64);
          this.app.stage.addChild(graphics);

          this.emulationGrid.get(x).set(y, graphics);
        }
      }
    } else {
      for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
          this.app.stage.addChild(this.emulationGrid.get(x).get(y));
        }
      }
    }
  }

  private removeGrid() {
    for (let x = 0; x <= 9; x++) {
      for (let y = 0; y <= 9; y++) {
        this.app.stage.removeChild(this.emulationGrid.get(x).get(y));
      }
    }
  }

  public removeSensorRead() {
    this.app.stage.removeChild(this.graphics);
  }

  public reset() {
    this.robot.reset();
  }

  ngAfterViewInit() {
    this.app = new PIXI.Application(640, 640, {backgroundColor : 0x000000});

    const editor = this.editorContent.nativeElement;
    editor.appendChild(this.app.view);

    const landscapeSprite = PIXI.Sprite.fromImage('./assets/emulator-stay-center-background-2.png');
    this.app.stage.addChild(landscapeSprite);

    this.app.stage.addChild(this.robot.robotSprite);

    const blocklyDiv = document.getElementById('blocklyDiv');
    const blocklyDiv2 = document.getElementById('blocklyDiv2');
    blocklyDiv2.appendChild(blocklyDiv);
  }
}
