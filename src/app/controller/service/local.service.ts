import { Injectable } from '@angular/core';
import {Local} from "../model/local.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private _local={} as Local;
  private _locals=[] as Array<Local>;

  constructor(private http:HttpClient) { }

  get local(): Local{
  if (this._local == null) {
  this._local == new Local();
}
    return this._local;
  }

  set local(value: Local) {
    this._local = value;
  }

  get locals(): Array<Local> {
    return this._locals;
  }

  set locals(value: Array<Local>) {
    this._locals = value;
  }
}
