import { ActionScope } from './action.scope';
import { Result } from './result';
import { LoopStatementContext, ExpIDContext } from './../simplex/gen/SimplexParser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { SimplexParserListener } from 'simplex/gen/SimplexParserListener';
import {
  ActionDeclarationContext, ExpIntegerContext, ExpBinaryRelationalContext, ActionParameterContext,
  IfStatementContext, ExpParenthesisContext, ExpressionContext, StmtActionCallContext,
  ReturnStatementContext, SimplexContext, AssignmentDeclarationContext, ExpNumberContext,
  ExpBooleanContext, ExpStringContext, ExpBinaryArithmeticContext,
  AssignmentContext, ActionCallContext, ElseStatementContext, ElseifStatementContext, StmtLoopContext
} from 'simplex/gen/SimplexParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { Scope } from './scope';

export class SimplexASTListener implements SimplexParserListener {
  private parseTreeProperty: Map<ParserRuleContext, any>;
  public emulationCode: string;
  private emulationTypes: Map<string, string>;

  private emulatorCodeBlocks: Map<ParserRuleContext, any>;
  private currentScope: Scope;

  constructor() {
    this.parseTreeProperty = new Map();
    this.emulationCode = '// Generated...\n\n';
    this.emulationTypes = new Map();
    this.emulationTypes.set('integer', 'number');
    this.emulationTypes.set('number', 'number');
    this.emulationTypes.set('boolean', 'boolean');
    this.emulationTypes.set('text', 'string');

    this.emulatorCodeBlocks = new Map();
  }

  enterSimplex (ctx: SimplexContext) {
    this.currentScope = new Scope('main');
  }

  exitSimplex (ctx: SimplexContext) {
    this.emulationCode += `\n\n
      function log(message) {
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
      }
    `;

    this.emulationCode += ``;
  }

  exitExpInteger (ctx: ExpIntegerContext) {
    this.parseTreeProperty.set(ctx, new Result<number>(+ctx._value.text));
  }

  exitExpNumber (ctx: ExpNumberContext) {
    this.parseTreeProperty.set(ctx, new Result<number>(+ctx._value.text));
  }

  exitExpBoolean (ctx: ExpBooleanContext) {
    this.parseTreeProperty.set(ctx, new Result<boolean>(ctx._value.text.toLowerCase() === 'true'));
  }

  exitExpString (ctx: ExpStringContext) {
    this.parseTreeProperty.set(ctx, new Result<string>(ctx._value.text));
  }

  exitExpID (ctx: ExpIDContext) {
    const symbolValue = this.currentScope.findSymbol(ctx._name.text);

    if (symbolValue === null) {
      console.log('Symbol not found!');
    } else {
      this.parseTreeProperty.set(ctx, new Result<any>(symbolValue)); // TODO: Ihh, any!
    }
  }

  exitExpBinaryArithmetic (ctx: ExpBinaryArithmeticContext) {
    const operator = ctx._symbol.text;

    const left = this.parseTreeProperty.get(ctx._expLeft);
    const right = this.parseTreeProperty.get(ctx._expRight);
    const result = new Result<number>();

    if (operator === '+') {
      result.result = left.result + right.result;
      // result += `${left} + ${right}`;
    } else if (operator === '-') {
      result.result = left.result - right.result;
      // result += `${left} - ${right}`;
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
      // result = left > right;
      result += `${left} > ${right}`;
    } else if (operator === '<') {
      // result = left < right;
      result += `${left} < ${right}`;
    }

    this.parseTreeProperty.set(ctx, result);

    this.parseTreeProperty.delete(ctx._expLeft);
    this.parseTreeProperty.delete(ctx._expRight);
  }

  /*exitExpParenthesis (ctx: ExpParenthesisContext) {
    console.log(ctx._expCenter);
    this.parseTreeProperty.set(ctx, ctx._expCenter);
  }*/

  exitAssignmentDeclaration (ctx: AssignmentDeclarationContext) {
    const expression = this.parseTreeProperty.get(ctx._exp);
    console.log('bla');
    console.log(this.parseTreeProperty);
    console.log(expression);

    this.currentScope.define(ctx._name.text, expression.result);
    console.log(this.currentScope);
    // const expression = ctx._exp.text;
// : ${this.emulationTypes.get(ctx._type.text)}
    // this.emulationCode += `\nlet ${ctx._name.text} = ${expression};\n`;
  }

  exitAssignment (ctx: AssignmentContext) {
    const expression = this.parseTreeProperty.get(ctx._exp);

    this.emulationCode += `\n${ctx._name.text} = ${expression};\n`;
  }

  exitStmtActionCall (ctx2: StmtActionCallContext) {
    const ctx = ctx2.actionCall();

    const parameter = ctx._exp.text;

    /*for (let i = 0; i < ctx._exp._exp.length; i++) {
      // const para = this.parseTreeProperty.get(ctx._exp._exp[i]);
      const para = ctx._exp.text;

      if (i === 0) {
        parameter += `${para}`;
      } else {
        parameter += `, ${para}`;
      }
    }*/

    this.emulationCode += `${ctx._name.text}(${parameter});\n`;
  }

  enterActionDeclaration (ctx: ActionDeclarationContext) {
    /*let parameter = '';

    for (let i = 0; i < ctx._params.length; i++) {
      // const para = this.parseTreeProperty.get(ctx._params[i]);
      const para = ctx._params[i];

      if (i === 0) {
        parameter += `${para._name.text}`;
      } else {
        parameter += `, ${para._name.text}`;
      }
    }

    const ret = ctx._ret.text;
// : ${this.emulationTypes.get(ret)}
    if (this.emulationTypes.has(ret)) {
      this.emulationCode += `\n\nfunction ${ctx._name.text}(${parameter})\n{\n`;
    } else {
      this.emulationCode += `\n\nfunction ${ctx._name.text}(${parameter})\n{\n`;
    }*/

    this.currentScope = new ActionScope('action', this.currentScope);
  }

  exitReturnStatement (ctx: ReturnStatementContext) {
    // this.emulationCode += `\nreturn ${ctx._exp.text}\n`;
    (<ActionScope>this.currentScope).returnResult = this.parseTreeProperty.get(ctx._exp);
    // this.parseTreeProperty.set(ctx, this.parseTreeProperty.get(ctx._exp));
    this.parseTreeProperty.delete(ctx._exp);
  }

  exitActionDeclaration (ctx: ActionDeclarationContext) {
    console.log('jetzt');
    // console.log(this.parseTreeProperty);
    // console.log(ctx);
    this.parseTreeProperty.set(ctx, (<ActionScope>this.currentScope).returnResult); // this.parseTreeProperty.get(ctx._ret));
   // this.parseTreeProperty.delete(ctx._ret);
    /*let parameter = '';

    for (let i = 0; i < ctx._params.length; i++) {
      const para = this.parseTreeProperty.get(ctx._params[i]);

      if (i === 0) {
        parameter += `${para.type} ${para.name}`;
      } else {
        parameter += `, ${para.type} ${para.name}`;
      }
    }

    this.emulationCode += `\n\nprivate ${ctx._name.text}(${parameter})\n{\n`;*/

    // this.emulationCode += `}\n\n`;
    if (this.currentScope.enclosingScope !== undefined) {
        this.currentScope = this.currentScope.enclosingScope;
    }
  }

  exitActionParameter (ctx: ActionParameterContext) {
    this.parseTreeProperty.set(ctx, { 'type': ctx._type.text, 'name': ctx._name.text });
  }

  enterIfStatement (ctx: IfStatementContext) {
    const ifStatement = `${ctx._exp.text}`;

    this.emulationCode += `if ${ifStatement} {\n`;
  }

  exitIfStatement (ctx: IfStatementContext) {
    this.emulationCode += `}\n`;
  }

  enterElseifStatement (ctx: ElseifStatementContext) {
    const elseIfStatement = `${ctx._exp.text}`;

    this.emulationCode += `} else if ${elseIfStatement} {\n`;
  }

  /*exitElseifStatement (ctx: ElseifStatementContext) {
    this.emulationCode += `}\n`;
  }*/

  enterElseStatement (ctx: ElseStatementContext) {
    const elseStatement = `\n} else {\n`;

    this.emulationCode += elseStatement;
  }

  enterLoopStatement (ctx: LoopStatementContext) {
    const expression = ctx._exp.text;
    const type = ctx._type.text;

    if (type === 'times') {
      this.emulationCode += `\nfor (let i = 0; i < ${expression}; i++) {\n`;
    } else {
      this.emulationCode += `\nwhile (${expression}) {\n`;
    }
  }

  exitLoopStatement (ctx: LoopStatementContext) {
    this.emulationCode += `\n}\n`;
  }
}
