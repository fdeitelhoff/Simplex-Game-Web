import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private subject = new Subject<any>();
  private _simplexCode: string;

  constructor() { }

  get simplexCode(): string {
    return this._simplexCode;
  }

  set simplexCode(simplexCode: string) {
    this._simplexCode = simplexCode;
  }

  compileSimplex() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}
