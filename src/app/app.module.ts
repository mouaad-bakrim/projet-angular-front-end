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
import { UserComponent } from './pages/user/user.component';
import { TeamComponent } from './pages/team/team.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoginComponent } from './pages/login/login.component';
import { PaimentComponent } from './pages/paiment/paiment.component';
import { RedevableCreatComponent } from './pages/redevable/redevable-creat/redevable-creat.component';
import { RedevableListComponent } from './pages/redevable/redevable-list/redevable-list.component';
import { LocalCreateComponent } from './pages/local/local-create/local-create.component';
import { LocalListComponent } from './pages/local/local-list/local-list.component';
import { TaxeAnuelleCreateComponent } from './pages/taxe-anuelle/taxe-anuelle-create/taxe-anuelle-create.component';
import { TaxeAnuelleListComponent } from './pages/taxe-anuelle/taxe-anuelle-list/taxe-anuelle-list.component';
import { TaxeTrimestrielListComponent } from './pages/taxe-trimestriel/taxe-trimestriel-list/taxe-trimestriel-list.component';
import { TaxeTrimestrielCeateComponent } from './pages/taxe-trimestriel/taxe-trimestriel-ceate/taxe-trimestriel-ceate.component';
import { SecteurCeateComponent } from './pages/secteur/secteur-ceate/secteur-ceate.component';
import { SecteurListComponent } from './pages/secteur/secteur-list/secteur-list.component';
import { RueListComponent } from './pages/rue/rue-list/rue-list.component';
import { RueCreateComponent } from './pages/rue/rue-create/rue-create.component';
import { TauxTaxeTrimestrielCreateComponent } from './pages/taux-taxe-trimestriel/taux-taxe-trimestriel-create/taux-taxe-trimestriel-create.component';
import { TauxTaxeTrimestrielListComponent } from './pages/taux-taxe-trimestriel/taux-taxe-trimestriel-list/taux-taxe-trimestriel-list.component';
import { CategorieListComponent } from './pages/categorie/categorie-list/categorie-list.component';
import { CategorieCreateComponent } from './pages/categorie/categorie-create/categorie-create.component';
import { QuartierListComponent } from './pages/quartier/quartier-list/quartier-list.component';
import { QuartierCreateComponent } from './pages/quartier/quartier-create/quartier-create.component';
import { NotificationCreateComponent } from './pages/notification/notification-create/notification-create.component';
import { NotificationListComponent } from './pages/notification/notification-list/notification-list.component';
import { NotificationLocalCreateComponent } from './pages/notification-local/notification-local-create/notification-local-create.component';

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
    UserComponent,
    TeamComponent,
    LogoutComponent,
    LoginComponent,
    PaimentComponent,
    RedevableCreatComponent,
    RedevableListComponent,
    LocalCreateComponent,
    LocalListComponent,
    TaxeAnuelleCreateComponent,
    TaxeAnuelleListComponent,
    TaxeTrimestrielListComponent,
    TaxeTrimestrielCeateComponent,
    SecteurCeateComponent,
    SecteurListComponent,
    RueListComponent,
    RueCreateComponent,
    TauxTaxeTrimestrielCreateComponent,
    TauxTaxeTrimestrielListComponent,
    CategorieListComponent,
    CategorieCreateComponent,
    QuartierListComponent,
    QuartierCreateComponent,
    NotificationCreateComponent,
    NotificationListComponent,
    NotificationLocalCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
