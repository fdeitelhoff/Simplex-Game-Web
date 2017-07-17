import { SimplexASTVisitor } from './simplexASTVisitor';
import { SimplexParserVisitor } from './../simplex/gen/SimplexParserVisitor';
import { SimulatorError } from './simulatorError';
import { DataService } from './data.service';
import { SimplexASTListener } from './simplexASTListener';
import { SimplexErrorListener } from './simplexErrorListener';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { SimplexLexer } from './../simplex/gen/SimplexLexer';
import { SimplexParser } from './../simplex/gen/SimplexParser';

import * as PIXI from 'pixi.js';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sapt-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {
  @ViewChild('canvas') editorContent: ElementRef;

  private robot: PIXI.Sprite;
  private app: PIXI.Application;
  private simplexErrorListener: SimplexErrorListener;
  private errors: any[];
  private _dataService: DataService;
  private _simulation: Function;
  private listener: SimplexASTListener;

  private subscription: Subscription;
  private blocklyWorkspace: any;
  private blocklyCode: string;

  constructor(private dataService: DataService) {
    this.simplexErrorListener = new SimplexErrorListener();
    this._dataService = dataService;

    this.subscription = this._dataService.getMessage().subscribe(() => { this.compile(); });

    this.blocklyWorkspace = window['workspace'];
    this.blocklyWorkspace.addChangeListener((event: any) => {
      this.blocklyCode = window['blockly'].JavaScript.workspaceToCode(this.blocklyWorkspace);
      console.log(this.blocklyCode);
    });
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

  public run() {
    try {
    this.blocklyCode += `\n
function print(message) {
  console.log('Program Output: ' + message);
}

function forward () {
  const d = ev3.rotation * (180/Math.PI);
  // console.log(d);
  ev3.x += 30;

  /*if (d === 90) {
    ev3.x += 30;
  } else if (d === 180) {
    ev3.y += 30;
  } else if (d === 270) {
    ev3.x -= 30;
  } else if (d === 360) {
    ev3.y -= 30;
  }*/
}

function back () {
  ev3.x -= 30;
}

function left () {
  const radians = 90 * (Math.PI/180);
  ev3.rotation += radians;
}

function right () {
  const radians = 90 * (Math.PI/180);
  ev3.rotation -= radians;
}`;

      this._simulation = new Function('ev3', 'SimulatorError', 'app', this.blocklyCode); // this.listener.emulationCode);
      const t = this._simulation(this.robot, new SimulatorError('<No Message Provided!>'), this.app);
    } catch (error) {
      console.log('error in sim: ' + error);
    }
  }

  ngAfterViewInit() {
    this.app = new PIXI.Application(600, 600, {backgroundColor : 0x000000});

    const editor = this.editorContent.nativeElement;
    editor.appendChild(this.app.view);

    this.robot = PIXI.Sprite.fromImage('./assets/cat.png');

    this.robot.position.set(32, 32);
    this.robot.anchor.set(0.5);
    this.robot.rotation += 90 * (Math.PI / 180);

    this.app.stage.addChild(this.robot);
    const _this = this;

    this.app.ticker.add(function (delta) {
      // _this.cat.x += 1;

    });
  }
}
