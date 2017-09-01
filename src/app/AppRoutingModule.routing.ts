import { DemoCheckboxComponent } from './demo/demoCheckbox/demoCheckbox.component';
import { DemoBreadcrumbComponent } from './demo/demoBreadcrumb/demoBreadcrumb.component';
import { DemoButtonComponent } from './demo/demoButton/demoButton.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DemoButtonComponent,
  },
  {
    path: 'buttons',
    component: DemoButtonComponent
  },
  {
    path: 'breadcrumb',
    component: DemoBreadcrumbComponent
  },
  {
    path: 'checkboxes',
    component: DemoCheckboxComponent
  }
];
@NgModule({
  imports: [
      RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModuleRoutes {}
