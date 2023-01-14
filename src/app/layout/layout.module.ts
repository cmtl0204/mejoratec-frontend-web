import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {AccessDeniedComponent} from "./access-denied/access-denied.component";
import {BlankComponent} from './blank/blank.component';
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './main/main.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {SidebarComponent} from './sidebar/sidebar.component';
import {TopbarComponent} from './topbar/topbar.component';
import {UnderMaintenanceComponent} from "./under-maintenance/under-maintenance.component";


@NgModule({
  declarations: [
    AccessDeniedComponent,
    BlankComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent,
    SidebarComponent,
    TopbarComponent,
    UnderMaintenanceComponent,
  ],
  exports: [
    AccessDeniedComponent,
    BlankComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent,
    SidebarComponent,
    TopbarComponent,
    UnderMaintenanceComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule {
}
