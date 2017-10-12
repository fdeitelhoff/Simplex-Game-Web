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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Emulation } from 'app/emulation';

// const fs = require('fs');
// import * as fs from 'fs';

// import { Blockly } from 'node-blockly';

@Component({
  // selector: 'sapt-root',
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

  private taskText: string;
  private taskDoneText: string;

  private currentTask: number;
  private maxTasks: number;

  private graphics: PIXI.Graphics;
  private emulationGrid: Map<number, Map<number, PIXI.Graphics>>;
  private isGridVisible: boolean;
  private mapDataGrid: Map<number, Map<number, PIXI.Graphics>>;
  private isMapDataVisible: boolean;
  private ultrasonicVisualization: PIXI.Graphics[];

  public cancel: boolean;
  private predefinedEmulatorCode: string;

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
    this.mapDataGrid = new Map();
    this.isMapDataVisible = false;

    this.ultrasonicVisualization = [];

    this.predefinedEmulatorCode = '';

    this.taskText = `<p>In der ersten Aufgabe geht es darum, die Motoren unseres Roboters
 <i>Wats<font color="#cc0000">3</font>n</i> zu testen.</p>
 <p>Um die Aufgabe erfolgreich abzuschließen, fahre bitte mit <i>Wats<font color="#cc0000">3</font>n</i>
 <strong>vier Schritte nach vorne</strong> und wieder <strong>vier Schritte zurück</strong>, um an die Ausgangsposition zu gelangen.</p>
 <p>Wenn du fertig bist oder nicht weiter kommst, klicke bitte auf die Schaltfläche <strong>nächste Aufgabe</strong>.</p>`;
    /*fs.readFile('./emulatorCode.txt', 'utf8', function(err, data) {
      console.log(data)
    });*/

    this.taskDoneText = 'nächste Aufgabe';
    this.currentTask = 1;
    this.maxTasks = 3;
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

    // Commenting out due to errors.
    // ParseTreeWalker.DEFAULT.walk(this.listener, result);
    this.errors = this.simplexErrorListener.errors;

    // const visitor = new SimplexASTVisitor();
    // const r = visitor.visit(result);

    // console.log(listener.emulationCode);

    // console.log(window['workspace']);
  }

  public run() {
    this.reset();

    this.emulationStatus = 'Running...';

    let emulatorCode = 'async function emulator() {\n';

    emulatorCode += this.blocklyCode;

    emulatorCode += '\nawait finish();';

    emulatorCode += `
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

  async function readUltrasonicSensor () {
    const position = robot.getUltrasonicSensorPosition();

    await sleep(400);

    container.highlightUltrasonicSensorRead(position[0], position[1]);

    const ultrasonicSensorValues = emulation.readUltrasonicSensorValue(position[0], position[1]);
    console.log(ultrasonicSensorValues);
    await sleep(300);

    container.removeSensorRead();

    return ultrasonicSensorValues;
  }

  function sleep(ms) {
    if (container.cancel) {
      throw new Error('Emulation is canceled...');
    }

    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function finish() {
    await sleep(500);
    container.finish();
  }
}

emulator().catch(function(error) {
  container.cancelEmulation();
});`;

    // console.log(emulatorCode);

    this._simulation = new Function('robot', 'SimulatorError', 'emulation', 'container', emulatorCode); // this.listener.emulationCode);

    this.cancel = false;

    this._simulation(this.robot, new SimulatorError('<No Message Provided!>'), this.emulation, this);
  }

  public highlightSensorRead(x: number, y: number) {
    this.graphics = new PIXI.Graphics();
    this.graphics.lineStyle(2, 0xFF0000);
    this.graphics.drawRect(x * 64, y * 64, 64, 64);
    this.app.stage.addChild(this.graphics);
  }

  public highlightUltrasonicSensorRead(x: number, y: number) {
    this.ultrasonicVisualization[0] = new PIXI.Graphics();
    this.ultrasonicVisualization[0].lineStyle(2, 0xFF0000);
    this.ultrasonicVisualization[0].drawRect(x * 64, y * 64, 64, 64);
    this.app.stage.addChild(this.ultrasonicVisualization[0]);

    this.ultrasonicVisualization[1] = new PIXI.Graphics();
    this.ultrasonicVisualization[1].lineStyle(2, 0xFF0000);
    this.ultrasonicVisualization[1].drawRect(x * 64, (y - 1) * 64, 64, 64);
    this.app.stage.addChild(this.ultrasonicVisualization[1]);

    this.ultrasonicVisualization[2] = new PIXI.Graphics();
    this.ultrasonicVisualization[2].lineStyle(2, 0xFF0000);
    this.ultrasonicVisualization[2].drawRect(x * 64, (y + 1) * 64, 64, 64);
    this.app.stage.addChild(this.ultrasonicVisualization[2]);

    this.ultrasonicVisualization[3] = new PIXI.Graphics();
    this.ultrasonicVisualization[3].lineStyle(2, 0xFF0000);
    this.ultrasonicVisualization[3].drawRect((x + 1) * 64, y * 64, 64, 64);
    this.app.stage.addChild(this.ultrasonicVisualization[3]);
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

  private toggleMapData() {
    if (this.isMapDataVisible) {
      this.removeMapData();
    } else {
      this.drawMapData();
    }

    this.isMapDataVisible = !this.isMapDataVisible;
  }

  private drawMapData() {
    if (this.mapDataGrid.size === 0) {
      for (let x = 0; x <= 9; x++) {
        this.mapDataGrid.set(x, new Map());

        for (let y = 0; y <= 9; y++) {
          const mapData = this.emulation.colorMapData[x][y];

          const buttonText = new PIXI.Text(mapData,
          {
              fontFamily : 'Arial',
              fontSize: 20,
              fill : 'black',
              align : 'center'
          });

          buttonText.anchor.set(0.5, 0.5);
          buttonText.position.set(x * 64 + 32, y * 64 + 32);

          this.app.stage.addChild(buttonText);
          this.mapDataGrid.get(x).set(y, buttonText);
        }
      }
    } else {
      for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
          this.app.stage.addChild(this.mapDataGrid.get(x).get(y));
        }
      }
    }
  }

  private removeMapData() {
    for (let x = 0; x <= 9; x++) {
      for (let y = 0; y <= 9; y++) {
        this.app.stage.removeChild(this.mapDataGrid.get(x).get(y));
      }
    }
  }

  public removeSensorRead() {
    this.app.stage.removeChild(this.graphics);

    for (let i = 0; i < this.ultrasonicVisualization.length; i++) {
      this.app.stage.removeChild(this.ultrasonicVisualization[i]);
    }
  }

  public reset() {
    this.cancel = true;
    this.cancelEmulation();
  }

  public cancelEmulation() {
    this.robot.reset();
    this.emulationStatus = 'Reset...';
  }

  public finish() {
    this.emulationStatus = 'Finished!';

    if (this.currentTask === 1) {
      if (this.robot.x === 2 && this.robot.y === 2 && this.robot.movedForward === 4 && this.robot.movedBackward === 4) {
        console.log('hurra');
      }
    }
  }

  public taskDone() {
    if (this.currentTask === 1) {
      this.currentTask = 2;

      this.taskDoneText = 'nächste Aufgabe';
      this.taskText = `<p>In der zweite Aufgabe geht es darum, die Steuerung unseres Roboters
      <i>Wats<font color="#cc0000">3</font>n</i> zu testen.</p>
      <p>Um die Aufgabe erfolgreich abzuschließen, fahre bitte mit <i>Wats<font color="#cc0000">3</font>n</i>
      <strong>ein Quadrat</strong>. Der Roboter soll nach Abschluss des Quadrats wieder auf der Ausgangsposition stehen.
      Wie groß das Quadrat ist und in welche Richtung du fährst, bleibt dir überlassen.</p>
      <p>Wenn du fertig bist oder nicht weiter kommst, klicke bitte auf die Schaltfläche <strong>nächste Aufgabe</strong>.</p>`;

    } else if (this.currentTask === 2) {
      this.currentTask = 3;

      this.taskDoneText = 'Fertig';
      this.taskText = `<p>In der dritten Aufgabe geht es darum, unseren Roboter
      <i>Wats<font color="#cc0000">3</font>n</i> nur auf dem sicheren Felsenuntergrund fahren zu lassen.</p>
      <p>Um die Aufgabe erfolgreich abzuschließen, erstelle bitte ein Programm, das <i>Wats<font color="#cc0000">3</font>n</i>
      auf steinigem Untergrund fahren und bei der Graskante umdrehen lässt. Das Programm kann unendlich laufen oder nach einer Zeit
      abbrechen. Die Entscheidung liegt bei dir.
      <p>Wenn du fertig bist oder nicht weiter kommst, klicke bitte auf die Schaltfläche <strong>Fertig</strong>.</p>`;

      } else if (this.currentTask === 3) {
        alert('alles fertig, hurra!');
    }
  }

  public exportUserProgram() {
    const xmlDom = window['blockly'].Xml.workspaceToDom(window['blockly'].mainWorkspace);

  }

  public importUserProgram() {
    /* var dom = Blockly.Xml.textToDom(xml);
    Blockly.mainWorkspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, dom);*/
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
