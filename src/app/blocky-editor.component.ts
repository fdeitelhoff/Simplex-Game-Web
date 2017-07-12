import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// import * as blockly from 'node-blockly';

@Component({
  selector: 'sapt-blockly-editor',
  templateUrl: './blockly-editor.component.html'
  // styleUrls: ['./monaco-editor.component.css']
})
export class BlocklyEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('blocklyDiv') editorContent: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log('bla');

    const myDiv: HTMLDivElement = this.editorContent.nativeElement;

    // console.log(myDiv);

    // const workspace = blockly.inject(myDiv);
    /*const loaderScript = document.createElement('script');
    loaderScript.type = 'text/javascript';
    loaderScript.src = 'assets/node-blockly/lib/blockly_compressed.js';
    document.body.appendChild(loaderScript);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/node-blockly/lib/blocks_compressed.js';
    document.body.appendChild(script);*/
  }
}
