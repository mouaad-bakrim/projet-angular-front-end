import {Component, OnInit} from '@angular/core';
import {RedevableService} from "../../../controller/service/redevable.service";
import {Redevable} from "../../../controller/model/redevable.model";

@Component({
  selector: 'app-redevable-creat',
  templateUrl: './redevable-creat.component.html',
  styleUrls: ['./redevable-creat.component.css']
})
export class RedevableCreatComponent implements OnInit{

  constructor(private _redevabelservice:RedevableService) {
  }


  ngOnInit(): void {

  }
  public save(): void {
    this._redevabelservice.save();
  }


  get redevable(): Redevable {

    return this._redevabelservice.redevable;
  }

  set redevable(value: Redevable) {
    this._redevabelservice.redevable = value;
  }

  get redevables(): Array<Redevable> {
    return this._redevabelservice.redevables;
  }

  set redevables(value: Array<Redevable>) {
    this._redevabelservice.redevables = value;
  }

}
