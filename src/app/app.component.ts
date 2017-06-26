import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

import * as PIXI from 'pixi.js';
import * as antlr4 from 'antlr4';
import * as blockly from 'node-blockly';

@Component({
  selector: 'sapt-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
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

    console.log(window['workspace']);
  }

  constructor(private elementRef: ElementRef) {

                    // Create the renderer
      const renderer = PIXI.autoDetectRenderer(512, 512);

      const el = this.elementRef.nativeElement;
      el.appendChild(renderer.view);

      // Create a container object called the `stage`
      const stage = new PIXI.Container();

  // Use Pixi's built-in `loader` object to load an image
  PIXI.loader
  .add('./assets/cat.png')
  .load(setup);

  // This `setup` function will run when the image has loaded

  const _this = this;
  function setup() {

  // Create the `cat` sprite from the texture
  _this.cat = new PIXI.Sprite(
      PIXI.loader.resources['./assets/cat.png'].texture

  );

  stage.addChild(_this.cat);

  function gameLoop() {

    // Loop this function at 60 frames per second
    requestAnimationFrame(gameLoop);

    // Move the cat 1 pixel to the right each frame
    // cat.x += 1;

    // Render the stage to see the animation
    renderer.render(stage);
  }

  // Start the game loop
  gameLoop();

    // Add the cat to the stage


    // Render the stage
    // renderer.render(stage);
  }

        // Tell the `renderer` to `render` the `stage`

    }
}
