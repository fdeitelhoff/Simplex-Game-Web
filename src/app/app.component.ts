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

  private cat: PIXI.Sprite;
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

function forward (x) {
  ev3.x += x;
}

function back (x) {
  ev3.x -= x;
}

function left (y) {
  ev3.y -= y;
}

function right (y) {
  ev3.y += y;
}`;

      this._simulation = new Function('ev3', 'SimulatorError', this.blocklyCode); // this.listener.emulationCode);
      const t = this._simulation(this.cat, new SimulatorError('<No Message Provided!>'));
    } catch (error) {
      console.log('error in sim: ' + error);
    }
  }

  ngAfterViewInit() {
    const renderer = PIXI.autoDetectRenderer(512, 512);

    const editor = this.editorContent.nativeElement;
    editor.appendChild(renderer.view);

    const stage = new PIXI.Container();

    PIXI.loader
      .add('./assets/cat.png')
      .load(setup);

    const _this = this;
    function setup() {
      _this.cat = new PIXI.Sprite(
        PIXI.loader.resources['./assets/cat.png'].texture

      );

      stage.addChild(_this.cat);

      function gameLoop() {
        requestAnimationFrame(gameLoop);

        renderer.render(stage);
      }

      gameLoop();
    }
  }
}
