import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {RueCreateComponent} from "./view/rue/rue-create/rue-create.component";
import {RedevableCreatComponent} from "./view/redevable/redevable-creat/redevable-creat.component";
import {IndexComponent} from "./view/index/index.component";

export let indexLink='';

let redevableLink='';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:redevableLink,component:RedevableCreatComponent},
  {path:indexLink,component:HomeComponent},
  {path:'rue',component:RueCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
