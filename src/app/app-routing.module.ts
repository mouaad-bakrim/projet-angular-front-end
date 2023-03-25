import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";

export let indexLink='';

const routes: Routes = [
  {path:indexLink,component:HomeComponent},
  {path:'rue',component:RueCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
