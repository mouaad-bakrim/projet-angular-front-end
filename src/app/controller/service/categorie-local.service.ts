import { Injectable } from '@angular/core';
import {CategorieLocal} from "../model/categorie-local.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieLocalService {
 private _categorie={} as CategorieLocal;
 private _categories=[] as Array<CategorieLocal>;

  constructor(private http: HttpClient) { }
  public save(): void {
    this.http.post<CategorieLocal>('http://localhost:8036/api/v1/categorie/', this.categorie).subscribe(data => {
      if (data != null) {
        alert('save success');
      } else {
        alert('save error::: ref exist');
      }
    });
  }

  get categorie(): CategorieLocal {
    if (this._categorie== null) {
      this._categorie == new CategorieLocal();
    }
    return this._categorie;
  }

  set categorie(value: CategorieLocal) {
    this._categorie = value;
  }

  get categories(): Array<CategorieLocal> {
    return this._categories;
  }

  set categories(value: Array<CategorieLocal>) {
    this._categories = value;
  }
}
