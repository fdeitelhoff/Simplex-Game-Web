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

  constructor(private dataService: DataService) {
    this.simplexErrorListener = new SimplexErrorListener();
    this._dataService = dataService;

    /*const typeScriptCode = `
      if (ev3.x > 25 || ev3.y > 25) {
        SimulatorError.message = 'I am a test!';
        throw SimulatorError;
      } else {
        for (let i = 1; i <= 24; i++) {
          ev3.x += 1;
          ev3.y += 1;
          console.log(ev3.x);
        }
      }

      /* else {
        ev3.x += x;
        ev3.y += y;

        // console.log(ev3.x + " " + ev3.y);
      }

      return { 'x': ev3.x };
    `;
    */
  }

  public handler() {
    const chars = new ANTLRInputStream(this._dataService.simplexCode);
    const lexer = new SimplexLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new SimplexParser(tokens);
    parser.buildParseTree = true;

    parser.removeErrorListeners();
    parser.addErrorListener(this.simplexErrorListener);

    const result = parser.simplex();
    const listener = new SimplexASTListener();

    ParseTreeWalker.DEFAULT.walk(listener, result);
    // const visitor = new SimplexASTVisitor();
    // const r = visitor.visit(result);

    // console.log(r);

    console.log(listener.emulationCode);

    // this.cat.x += 5;
    // this.cat.y += 5;

    this.errors = this.simplexErrorListener.errors;
    // console.log(window['workspace']);


    try {
      this._simulation = new Function('ev3', 'SimulatorError', listener.emulationCode);
      const t = this._simulation(this.cat, new SimulatorError('<No Message Provided!>'));
      // console.log('Return von X: ' + t.x);
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
