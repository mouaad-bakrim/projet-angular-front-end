import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import {MenupageComponent} from "./pages/menupage/menupage.component";
import {PageComponent} from "./pages/page/page.component";
import {TeamComponent} from "./pages/team/team.component";
import {ServiceComponent} from "./pages/service/service.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'menupage',component:MenupageComponent},
  {path:'page',component:PageComponent},
  {path:'team',component:TeamComponent},
  {path:'service',component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
