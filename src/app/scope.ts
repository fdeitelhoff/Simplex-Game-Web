export class Scope {
  name: string;
  enclosingScope: Scope;
  symbols: Map<string, any>;

  constructor(name: string, enclosingScope?: Scope) {
    this.name = name;
    this.enclosingScope = enclosingScope;
    this.symbols = new Map();
  }

  define(name: string, value: any) {
        this.symbols.set(name, value);
  }

  findSymbol(name) {
    const symbol = this.symbols.get(name);

    if (symbol !== undefined) {
      return symbol;
    }

    if (this.enclosingScope !== undefined) {
      return this.enclosingScope.findSymbol(name);
    }

    return null;
  }
}
