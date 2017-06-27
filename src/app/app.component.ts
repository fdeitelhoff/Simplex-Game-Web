import { SimplexErrorListener } from './simplexErrorListener';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { SimplexLexer } from './../simplex/gen/SimplexLexer';
import { SimplexParser } from './../simplex/gen/SimplexParser';

import * as PIXI from 'pixi.js';
import * as antlr4 from 'antlr4';

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

  constructor() {
    this.simplexErrorListener = new SimplexErrorListener();
  }

  public handler() {
    const chars = new ANTLRInputStream('integer i = 3');
    const lexer = new SimplexLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new SimplexParser(tokens);
    parser.buildParseTree = true;

    parser.removeErrorListeners();
    parser.addErrorListener(this.simplexErrorListener);

    const result = parser.simplex();

    this.cat.x += 5;
    this.cat.y += 5;

    console.log(result);

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
