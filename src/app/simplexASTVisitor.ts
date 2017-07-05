import { ExpBooleanContext, SimplexContext, TypelessContext } from './../simplex/gen/SimplexParser';
import { SimplexParserVisitor } from 'simplex/gen/SimplexParserVisitor';

import { AbstractParseTreeVisitor, ErrorNode, ParseTree, RuleNode, TerminalNode } from 'antlr4ts/tree';

export class SimplexASTVisitor extends AbstractParseTreeVisitor<string> implements SimplexParserVisitor<string> {

  constructor() {
    super();
  }

  protected defaultResult(): string {
    return 'test from default result';
  }

  public visitExpBoolean (ctx: ExpBooleanContext): string {
    console.log(ctx);

    return 'v';
  }

  public visitSimplex (ctx: SimplexContext): string {
    console.log(ctx);

    return 'v2';
  }

  public visitTypeless (ctx: TypelessContext): string {
    console.log(ctx);

    return 'v3';
  }
}
