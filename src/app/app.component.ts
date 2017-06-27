import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

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

  public handler() {
    const chars = new antlr4.InputStream('hallo du da');
    // const lexer = new simplexLexer.SimplexLexer(chars);
    // const tokens = new antlr4.CommonTokenStream(lexer);
    // const parser = new simplexParser.SimplexParser(tokens);
    // parser.buildParseTrees = true;

    this.cat.x += 5;
    this.cat.y += 5;

    console.log(chars);

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
