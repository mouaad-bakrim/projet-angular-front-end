import { Injectable } from '@angular/core';
import {Redevable} from "../model/redevable.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RedevableService {
  private _redevable={} as Redevable;
  private _redevables=[] as Array<Redevable>;

  constructor(private http:HttpClient) { }

  get redevable(): Redevable {
    if (this._redevable == null) {
      this._redevable == new Redevable();
    }
    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }

  get redevables(): Array<Redevable> {
    return this._redevables;
  }

  set redevables(value: Array<Redevable>) {
    this._redevables = value;
  }
}
