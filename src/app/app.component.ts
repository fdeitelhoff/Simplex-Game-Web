import { DataService } from './data.service';
import { SimplexASTListener } from './simplexASTListener';
import { SimplexErrorListener } from './simplexErrorListener';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { SimplexLexer } from './../simplex/gen/SimplexLexer';
import { SimplexParser } from './../simplex/gen/SimplexParser';

import * as PIXI from 'pixi.js';
// import * as antlr4 from 'antlr4';

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

  constructor(private dataService: DataService) {
    this.simplexErrorListener = new SimplexErrorListener();
    this._dataService = dataService;
  }

  public handler() {
    console.log(this._dataService.simplexCode);
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

    this.cat.x += 5;
    this.cat.y += 5;

    this.errors = this.simplexErrorListener.errors;
    // console.log(window['workspace']);
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
