import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import {ServiceComponent} from "./pages/service/service.component";
import {TaxeComponent} from "./pages/taxe/taxe.component";
import {UserComponent} from "./pages/user/user.component";
import {TeamComponent} from "./pages/team/team.component";
import {PaimentComponent} from "./pages/paiment/paiment.component";
import {RedevableCreatComponent} from "./pages/redevable/redevable-creat/redevable-creat.component";

export let indexLink='';
export let taxeLink='taxe';

const routes: Routes = [
  {path:indexLink,component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'service',component:ServiceComponent},
  {path:taxeLink,component:TaxeComponent},
  {path:'user',component:UserComponent},
  {path:'team',component:TeamComponent},
  {path:'paiment',component:PaimentComponent},
  {path:'redevable-create',component:RedevableCreatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
