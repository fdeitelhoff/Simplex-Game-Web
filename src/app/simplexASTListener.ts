import { ActionDeclarationContext, ExpIntegerContext, ExpBinaryRelationalContext } from './../simplex/gen/SimplexParser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { SimplexParserListener } from 'simplex/gen/SimplexParserListener';
import { SimplexContext, AssignmentDeclarationContext, ExpNumberContext,
  ExpBooleanContext, ExpStringContext, ExpBinaryArithmeticContext
} from 'simplex/gen/SimplexParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

export class SimplexASTListener implements SimplexParserListener {
  private parseTreeProperty: Map<ParserRuleContext, any>;

  constructor() {
    this.parseTreeProperty = new Map();
  }

  exitSimplex (ctx: SimplexContext) {
    console.log('test');
  }

  exitExpInteger (ctx: ExpIntegerContext) {
    this.parseTreeProperty.set(ctx, +ctx._value.text);
  }

  exitExpNumber (ctx: ExpNumberContext) {
    this.parseTreeProperty.set(ctx, +ctx._value.text);
  }

  exitExpBoolean (ctx: ExpBooleanContext) {
    this.parseTreeProperty.set(ctx, ctx._value.text);
  }

  exitExpString (ctx: ExpStringContext) {
    this.parseTreeProperty.set(ctx, ctx._value.text);
  }

  exitExpBinaryArithmetic (ctx: ExpBinaryArithmeticContext) {
    const operator = ctx._symbol.text;

    const left = this.parseTreeProperty.get(ctx._expLeft);
    const right = this.parseTreeProperty.get(ctx._expRight);
    let result = 0;

    if (operator === '+') {
      result = left + right;
    } else if (operator === '-') {
      result = left - right;
    }

    this.parseTreeProperty.set(ctx, result);

    this.parseTreeProperty.delete(ctx._expLeft);
    this.parseTreeProperty.delete(ctx._expRight);
  }

  exitExpBinaryRelational (ctx: ExpBinaryRelationalContext) {
    const operator = ctx._symbol.text;

    const left = this.parseTreeProperty.get(ctx._expLeft);
    const right = this.parseTreeProperty.get(ctx._expRight);
    let result = false;

    if (operator === '>') {
      result = left > right;
    } else if (operator === '<') {
      result = left < right;
    }

    this.parseTreeProperty.set(ctx, result);

    this.parseTreeProperty.delete(ctx._expLeft);
    this.parseTreeProperty.delete(ctx._expRight);
  }

  exitAssignmentDeclaration (ctx: AssignmentDeclarationContext) {
    // this.emulationCode += `\nlet ${ctx._type.text} ${ctx._name.text} = ??\n`;
  }

  enterActionDeclaration (ctx: ActionDeclarationContext) {
    // this.emulationCode += `\n\nprivate ${ctx._name.text}()\n{\n`;
  }

  exitActionDeclaration (ctx: ActionDeclarationContext) {
    // this.emulationCode += `}\n\n`;
  }
}
