import { Override } from 'antlr4ts/Decorators';
import { ANTLRErrorListener } from 'antlr4ts';
import { RecognitionException } from 'antlr4ts';
import { Recognizer } from 'antlr4ts';

export class SimplexErrorListener implements ANTLRErrorListener<any> {
  public errors: any[];

  constructor() {
    this.errors = [];
  }

  public syntaxError<T>(recognizer: Recognizer<T, any>, offendingSymbol: T, line: number,
    charPositionInLine: number, msg: string, e: RecognitionException): void {
      this.errors.push({ 'line': line, 'char': charPositionInLine, 'msg': msg });
  }
}
