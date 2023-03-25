import { Injectable } from '@angular/core';
import {TauxTaxeTrimestriel} from "../model/taux-taxe-trimestriel.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TauxTaxeTrimestrielService {
  private _tauxTaxe={} as TauxTaxeTrimestriel;
  private _tauxTaxes=[] as  Array<TauxTaxeTrimestriel>;

  constructor(private http: HttpClient) { }

  get tauxTaxe(): TauxTaxeTrimestriel {
    if (this._tauxTaxe == null) {
      this._tauxTaxe == new TauxTaxeTrimestriel();
    }
    return this._tauxTaxe;
  }

  set tauxTaxe(value: TauxTaxeTrimestriel) {
    this._tauxTaxe = value;
  }

  get tauxTaxes(): Array<TauxTaxeTrimestriel> {
    return this._tauxTaxes;
  }

  set tauxTaxes(value: Array<TauxTaxeTrimestriel>) {
    this._tauxTaxes = value;
  }
}
