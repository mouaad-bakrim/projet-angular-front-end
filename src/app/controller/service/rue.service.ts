import { Injectable } from '@angular/core';
import {Rue} from "../model/rue.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RueService {
  private _rue={} as Rue;
  private _rues=[] as Array<Rue>;

  constructor(private http: HttpClient) { }

  get rue(): Rue {

    if (this._rue == null) {
      this._rue == new Rue();
    }
    return this._rue;
  }

  set rue(value: Rue) {
    this._rue = value;
  }

  get rues(): Array<Rue> {
    return this._rues;
  }

  set rues(value: Array<Rue>) {
    this._rues = value;
  }
}
