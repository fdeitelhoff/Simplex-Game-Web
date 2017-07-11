import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { SimplexParserListener } from 'simplex/gen/SimplexParserListener';
import {
  ActionDeclarationContext, ExpIntegerContext, ExpBinaryRelationalContext, ActionParameterContext,
  IfStatementContext, ExpParenthesisContext, ExpressionContext, StmtActionCallContext,
  ReturnStatementContext, SimplexContext, AssignmentDeclarationContext, ExpNumberContext,
  ExpBooleanContext, ExpStringContext, ExpBinaryArithmeticContext,
  AssignmentContext, ActionCallContext, ElseStatementContext, ElseifStatementContext,
  StmtLoopContext, ExpBinaryLogicContext, ExpActionCallContext, LoopStatementContext, ExpIDContext,
  ActionExpressionsContext
} from 'simplex/gen/SimplexParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

export class SimplexASTListener implements SimplexParserListener {
  private parseTreeProperty: Map<ParserRuleContext, any>;
  public emulationCode: string;
  private emulationTypes: Map<string, string>;

  private ifCount: number;
  private elseIfCount: number;
  private loopCount: number;
  private indent: number;

  constructor() {
    this.parseTreeProperty = new Map();
    this.emulationCode = '// Generated...\n\n';

    this.emulationTypes = new Map();
    this.emulationTypes.set('integer', 'number');
    this.emulationTypes.set('number', 'number');
    this.emulationTypes.set('boolean', 'boolean');
    this.emulationTypes.set('text', 'string');
  }

  enterSimplex (ctx: SimplexContext) {
    this.ifCount = 0;
    this.elseIfCount = 0;
    this.loopCount = 0;
    this.indent = 0;
  }

  exitSimplex (ctx: SimplexContext) {
    this.emulationCode += `\n
function print(message) {
  console.log('Program Output: ' + message);
}

function forward (x) {
  ev3.x += x;
}

function back (x) {
  ev3.x -= x;
}

function left (y) {
  ev3.y -= y;
}

function right (y) {
  ev3.y += y;
}`;
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

  exitExpID (ctx: ExpIDContext) {
    this.parseTreeProperty.set(ctx, ctx._name.text);
  }

  exitExpBinaryArithmetic (ctx: ExpBinaryArithmeticContext) {
    const operator = ctx._symbol.text;

    const left = this.parseTreeProperty.get(ctx._expLeft);
    const right = this.parseTreeProperty.get(ctx._expRight);
    let result = '';

    if (operator === '+') {
      result += `${left} + ${right}`;
    } else if (operator === '-') {
      result += `${left} - ${right}`;
    }

    this.parseTreeProperty.set(ctx, result);

    this.parseTreeProperty.delete(ctx._expLeft);
    this.parseTreeProperty.delete(ctx._expRight);
  }

  exitExpBinaryRelational (ctx: ExpBinaryRelationalContext) {
    const operator = ctx._symbol.text;

    const left = this.parseTreeProperty.get(ctx._expLeft);
    const right = this.parseTreeProperty.get(ctx._expRight);
    let result = '';

    if (operator === '>') {
      result += `${left} > ${right}`;
    } else if (operator === '<') {
      result += `${left} < ${right}`;
    }

    this.parseTreeProperty.set(ctx, result);

    this.parseTreeProperty.delete(ctx._expLeft);
    this.parseTreeProperty.delete(ctx._expRight);
  }

  exitExpBinaryLogic (ctx: ExpBinaryLogicContext) {
    const operator = ctx._symbol.text;

    const left = this.parseTreeProperty.get(ctx._expLeft);
    const right = this.parseTreeProperty.get(ctx._expRight);
    let result = '';

    if (operator === 'and') {
      result += `${left} && ${right}`;
    } else if (operator === 'or') {
      result += `${left} || ${right}`;
    }

    this.parseTreeProperty.set(ctx, result);

    this.parseTreeProperty.delete(ctx._expLeft);
    this.parseTreeProperty.delete(ctx._expRight);
  }

  exitExpParenthesis (ctx: ExpParenthesisContext) {
    this.parseTreeProperty.set(ctx, this.parseTreeProperty.get(ctx._expCenter));

    this.parseTreeProperty.delete(ctx._expCenter);
  }

  exitAssignmentDeclaration (ctx: AssignmentDeclarationContext) {
    const expression = this.parseTreeProperty.get(ctx._exp);

    const indent = new Array(this.indent * 4).join(' ');

    this.emulationCode += `${indent}let ${ctx._name.text} = ${expression};\n`;

    this.parseTreeProperty.delete(ctx._exp);
  }

  exitAssignment (ctx: AssignmentContext) {
    const indent = new Array(this.indent * 4).join(' ');

    const expression = this.parseTreeProperty.get(ctx._exp);

    this.emulationCode += `${indent}${ctx._name.text} = ${expression};\n`;

    this.parseTreeProperty.get(ctx._exp);
  }

  exitExpActionCall (ctx: ExpActionCallContext) {
    this.parseTreeProperty.set(ctx, this.parseTreeProperty.get(ctx.actionCall()));

    this.parseTreeProperty.delete(ctx.actionCall());
  }

  exitStmtActionCall (ctx: StmtActionCallContext) {
    const indent = new Array(this.indent * 4).join(' ');

    this.emulationCode += `${indent}${this.parseTreeProperty.get(ctx.actionCall())};\n`;

    this.parseTreeProperty.delete(ctx.actionCall());
  }

  exitActionCall (ctx: ActionCallContext) {
    let parameter = '';

    if (this.parseTreeProperty.has(ctx._exp)) {
      const expressions = this.parseTreeProperty.get(ctx._exp);

      for (let i = 0; i < expressions.length; i++) {
        const para = this.parseTreeProperty.get(expressions[i]);

        if (i === 0) {
          parameter += `${para}`;
        } else {
          parameter += `, ${para}`;
        }

        this.parseTreeProperty.delete(expressions[i]);
      }

      this.parseTreeProperty.delete(ctx._exp)
    }

    this.parseTreeProperty.set(ctx, `${ctx._name.text}(${parameter})`);
  }

  exitActionExpressions (ctx: ActionExpressionsContext) {
    const expressions = [];

    for (const exp of ctx._exp) {
      expressions.push(exp);
    }

    this.parseTreeProperty.set(ctx, expressions);
  }

  enterActionDeclaration (ctx: ActionDeclarationContext) {
    let parameter = '';

    for (let i = 0; i < ctx._params.length; i++) {
      const para = ctx._params[i];

      if (i === 0) {
        parameter += `${para._name.text}`;
      } else {
        parameter += `, ${para._name.text}`;
      }
    }

    if (ctx._ret !== undefined) {
      const ret = ctx._ret.text;

      if (this.emulationTypes.has(ret)) {
        this.emulationCode += `\n\nfunction ${ctx._name.text}(${parameter})\n{\n`;
      } else {
        this.emulationCode += `\n\nfunction ${ctx._name.text}(${parameter})\n{\n`;
      }
    }
  }

  exitReturnStatement (ctx: ReturnStatementContext) {
    const returnStatement = this.parseTreeProperty.get(ctx._exp);

    this.emulationCode += `    return ${returnStatement}\n`;

    this.parseTreeProperty.delete(ctx._exp);
  }

  exitActionDeclaration (ctx: ActionDeclarationContext) {
    this.emulationCode += `}\n\n`;
  }

  enterIfStatement (ctx: IfStatementContext) {
    const indent = new Array(this.indent * 4).join(' ');

    this.emulationCode += `${indent}if (if-expression-label-${++this.ifCount}) \n${indent}{\n`;

    this.indent++;
  }

  exitIfStatement (ctx: IfStatementContext) {
    this.indent--;

    const indent = new Array(this.indent * 4).join(' ');

    const expression = this.parseTreeProperty.get(ctx._exp);

    this.emulationCode = this.emulationCode.replace(`if-expression-label-${this.ifCount}`, expression);

    this.emulationCode += `${indent}}${indent}\n`;

    this.parseTreeProperty.delete(ctx._exp);

    this.ifCount--;
  }

  enterElseifStatement (ctx: ElseifStatementContext) {
    this.indent--;

    const indent = new Array(this.indent * 4).join(' ');

    this.emulationCode += `${indent}}\n${indent}else if (elseif-expression-label-${++this.elseIfCount}) \n${indent}{\n`;

    this.indent++;
  }

  exitElseifStatement (ctx: ElseifStatementContext) {
    const elseIfStatement = this.parseTreeProperty.get(ctx._exp);

    this.emulationCode = this.emulationCode.replace(`elseif-expression-label-${this.elseIfCount}`, elseIfStatement);

    this.parseTreeProperty.delete(ctx._exp);

    this.elseIfCount--;
    this.indent--;
  }

  enterElseStatement (ctx: ElseStatementContext) {
    const indent = new Array(this.indent * 4).join(' ');

    const elseStatement = `${indent}}\n${indent}else \n${indent}{\n`;

    this.emulationCode += elseStatement;

    this.indent++;
  }

  enterLoopStatement (ctx: LoopStatementContext) {
    const indent = new Array(this.indent * 4).join(' ');

    const type = ctx._type.text;

    if (type === 'times') {
      this.emulationCode += `\n${indent}for (let i = 0; i < loop-expression-label-${++this.loopCount}; i++) \n${indent}{\n`;
    } else {
      this.emulationCode += `\n${indent}while (loop-expression-label-${++this.loopCount}) \n${indent}{\n`;
    }

    this.indent++;
  }

  exitLoopStatement (ctx: LoopStatementContext) {
    this.indent--;

    const indent = new Array(this.indent * 4).join(' ');

    const expression = this.parseTreeProperty.get(ctx._exp);

    this.emulationCode = this.emulationCode.replace(`loop-expression-label-${this.loopCount}`, expression);

    this.emulationCode += `${indent}}\n`;

    this.parseTreeProperty.delete(ctx._exp);

    this.loopCount--;
  }
}
