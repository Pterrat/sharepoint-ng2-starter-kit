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
