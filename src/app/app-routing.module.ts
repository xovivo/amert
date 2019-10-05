import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// tslint:disable-next-line:variable-name
const app_routes: Routes = [
      {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    // { path: '**', redirectTo: 'home', pathMatch: 'full' }
    { path: '**', component: NopagefoundComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
export const APP_ROUTES = RouterModule.forRoot( app_routes, { useHash: true } );





