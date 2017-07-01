import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { SimplexParserListener } from 'simplex/gen/SimplexParserListener';
import { SimplexContext } from 'simplex/gen/SimplexParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

export class SimplexASTListener implements SimplexParserListener {
  constructor() {

  }

  exitSimplex? (ctx: SimplexContext) {
    console.log('test');
  }
}
