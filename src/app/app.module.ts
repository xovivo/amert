import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderdashboardComponent } from './shared/headerdashboard/headerdashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
// Rutas
import { AppRoutingModule } from './app-routing.module';
import { KeysPipe } from './pipes/keys.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderdComponent } from './shared/headerd/headerd.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderdComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    LoginComponent,
    RegistroComponent,
    KeysPipe,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderdashboardComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
