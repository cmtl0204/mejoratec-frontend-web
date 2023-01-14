import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccessDeniedComponent} from "./access-denied/access-denied.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UnderMaintenanceComponent} from "./under-maintenance/under-maintenance.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: '', component: MainComponent,
  },
  {
    path: 'access-denied', component: AccessDeniedComponent
  },
  {
    path: 'not-found', component: NotFoundComponent,
  },
  {
    path: 'under-maintenance', component: UnderMaintenanceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
