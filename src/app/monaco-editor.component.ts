import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare const monaco: any;
declare const require: any;

@Component({
  selector: 'sapt-monaco-editor',
  templateUrl: './monaco-editor.component.html'
  // styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editorContent: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
    const onGotAmdLoader = () => {
      // Load monaco
        (<any>window).require.config({ paths: { 'vs': 'assets/monaco-editor/min/vs' } });
        (<any>window).require(['vs/editor/editor.main'], () => {
        this.initMonaco();
      });
    };

    // Load AMD loader if necessary
    if (!(<any>window).require) {
      const loaderScript = document.createElement('script');
      loaderScript.type = 'text/javascript';
      loaderScript.src = 'assets/monaco-editor/min/vs/loader.js';
      loaderScript.addEventListener('load', onGotAmdLoader);
      document.body.appendChild(loaderScript);
    } else {
      onGotAmdLoader();
    }
  }

  // Will be called once monaco library is available
  initMonaco() {
    const myDiv: HTMLDivElement = this.editorContent.nativeElement;

    monaco.languages.register({ id: 'Simplex' });

    monaco.languages.setMonarchTokensProvider('Simplex', {
        // Set defaultToken to invalid to see what you do not tokenize yet
        defaultToken: 'invalid',

        keywords: [
            'true', 'false', 'type', 'on', 'create', 'if', 'end', 'elseif', 'else',
            'while', 'times', 'repeat', 'until', 'action', 'returns', 'return',
            'now'
        ],

        typeKeywords: [
            'boolean', 'integer', 'number', 'text', 'me'
        ],

        operators: [
            '=', '>', '>=', '<', '<=', '+', '-', '*', '/', 'mod', 'not', 'not=',
            'and', 'or', ':'
        ],

        // we include these common regular expressions
        symbols:  /[=><!~?:&|+\-*\/\^%]+/,

        // C# style strings
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/[a-z_$][\w$]*/, { cases: { '@typeKeywords': 'keyword',
                    '@keywords': 'keyword',
                    '@default': 'identifier' } }],
                [/[A-Z][\w\$]*/, 'type.identifier' ],  // to show class names nicely

                // whitespace
                { include: '@whitespace' },

                // delimiters and operators
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, { cases: { '@operators': 'operator',
                    '@default'  : '' } } ],

                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],

                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],

                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid' ],  // non-teminated string
                [/"/,  { token: 'string.quote', bracket: '@open', next: '@string' } ],

                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string','string.escape','string']],
                [/'/, 'string.invalid']
            ],

            comment: [
                [/[^\/*]+/, 'comment' ],
                [/\/\*/,    'comment', '@push' ],    // nested comment
                ['\\*/',    'comment', '@pop'  ],
                [/[\/*]/,   'comment' ]
            ],

            string: [
                [/[^\\"]+/,  'string'],
                [/@escapes/, 'string.escape'],
                [/\\./,      'string.escape.invalid'],
                [/"/,        { token: 'string.quote', bracket: '@close', next: '@pop' } ]
            ],

            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/,       'comment', '@comment' ],
                [/\/\/.*$/,    'comment'],
            ],
        },
    });

    const editor = monaco.editor.create(myDiv, {
      value: 'integer i = 3',
      language: 'Simplex',
      automaticLayout: true
    });
  }
}
