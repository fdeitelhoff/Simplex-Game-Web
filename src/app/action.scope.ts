import { Result } from './result';
import { Scope } from './scope';

export class ActionScope extends Scope {
  private parameterScope: Scope;
  returnResult: Result<any>;

  constructor(name: string, enclosingScope?: Scope) {
    super(name, enclosingScope);

    this.parameterScope = new Scope('parameter');
  }

  findSymbol (name) {
      const symbol = this.symbols.get(name);

      if (symbol !== undefined) {
          return symbol;
      }

      return this.parameterScope.findSymbol(name);
  };
}
