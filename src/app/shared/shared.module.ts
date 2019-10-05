import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderdashboardComponent } from './headerdashboard/headerdashboard.component';
import { HeaderdComponent } from './headerd/headerd.component';


@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        HeaderdashboardComponent,
        HeaderdComponent
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ]
})
export class SharedModule { }
