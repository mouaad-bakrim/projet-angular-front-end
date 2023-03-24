import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {FooterComponent} from "./shareage/footer/footer.component";
import {NavbarComponent} from "./shareage/navbar/navbar.component";
import { ServiceComponent } from './pages/service/service.component';
import {TaxeComponent} from "./pages/taxe/taxe.component";
import { NotificationComponent } from './pages/notification/notification.component';
import { UserComponent } from './pages/user/user.component';
import { TeamComponent } from './pages/team/team.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoginComponent } from './pages/login/login.component';
import { PaimentComponent } from './pages/paiment/paiment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    TaxeComponent,
    NotificationComponent,
    UserComponent,
    TeamComponent,
    LogoutComponent,
    LoginComponent,
    PaimentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
