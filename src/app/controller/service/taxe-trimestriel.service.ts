import { Injectable } from '@angular/core';
import {TaxeTrimestriel} from "../model/taxe-trimestriel.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaxeTrimestrielService {
  private _taxeTtrimestriel={} as TaxeTrimestriel;
  private _taxeTtrimestriels=[] as Array<TaxeTrimestriel>;

  constructor(private http: HttpClient) { }

  get taxeTtrimestriel(): TaxeTrimestriel {

    if (this._taxeTtrimestriel == null) {
      this._taxeTtrimestriel == new TaxeTrimestriel();
    }
    return this._taxeTtrimestriel;
  }

  set taxeTtrimestriel(value: TaxeTrimestriel) {
    this._taxeTtrimestriel = value;
  }

  get taxeTtrimestriels(): Array<TaxeTrimestriel> {
    return this._taxeTtrimestriels;
  }

  set taxeTtrimestriels(value: Array<TaxeTrimestriel>) {
    this._taxeTtrimestriels = value;
  }
}
