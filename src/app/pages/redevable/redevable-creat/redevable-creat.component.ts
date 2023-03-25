import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {indexLink} from "../../../app-routing.module";

@Component({
  selector: 'app-redevable-creat',
  templateUrl: './redevable-creat.component.html',
  styleUrls: ['./redevable-creat.component.css']
})
export class RedevableCreatComponent {
  constructor(private router:Router) {
  }
  public save(){
    this.router.navigate([indexLink],{state:{'exemple':12}})
  }


}
