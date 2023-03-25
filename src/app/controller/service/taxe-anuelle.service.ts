import { Injectable } from '@angular/core';
import {TaxeAnuelle} from "../model/taxe-anuelle.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaxeAnuelleService {
  private _taxeAnuelle={} as TaxeAnuelle;
  private _taxeAnuelles=[] as Array<TaxeAnuelle>;

  constructor(private http: HttpClient) { }

  get taxeAnuelle(): TaxeAnuelle {
    if (this._taxeAnuelle == null) {
      this._taxeAnuelle == new TaxeAnuelle();
    }
    return this._taxeAnuelle;
  }

  set taxeAnuelle(value: TaxeAnuelle) {
    this._taxeAnuelle = value;
  }

  get taxeAnuelles(): Array<TaxeAnuelle> {
    return this._taxeAnuelles;
  }

  set taxeAnuelles(value: Array<TaxeAnuelle>) {
    this._taxeAnuelles = value;
  }
}
