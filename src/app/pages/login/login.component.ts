import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {indexLink} from "../../app-routing.module";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(private router:Router) {
 }
 public save(){
   this.router.navigate([indexLink],{state:{'exemple':12}})
 }
}
