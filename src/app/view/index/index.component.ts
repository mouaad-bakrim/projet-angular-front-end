import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private app:AppComponent) {
    app.setnavbar=false;
  }


}
