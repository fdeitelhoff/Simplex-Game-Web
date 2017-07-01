import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private _simplexCode: any;

  constructor() { }

  get simplexCode(): any {
    return this._simplexCode;
  }

  set simplexCode(simplexCode: any) {
    this._simplexCode = simplexCode;
  }
}
