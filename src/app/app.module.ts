import { CheckboxComponent } from './fabric-components/checkboxes/checkbox/checkbox.component';
import { DemoCheckboxComponent } from './demo/demoCheckbox/demoCheckbox.component';
import { BreadcrumbComponent } from './fabric-components/breadcrumb/breadcrumb/breadcrumb.component';
import { DemoBreadcrumbComponent } from './demo/demoBreadcrumb/demoBreadcrumb.component';
import { DemoButtonComponent } from './demo/demoButton/demoButton.component';
import { AppRoutingModuleRoutes } from './AppRoutingModule.routing';
import { ButtonSmallComponent } from './fabric-components/buttons/button-small/button-small.component';
import { ButtonPrimaryComponent } from './fabric-components/buttons/button-primary/button-primary.component';
import { ButtonHeroComponent } from './fabric-components/buttons/button-hero/button-hero.component';
import { ButtonCompoundComponent } from './fabric-components/buttons/button-compound/button-compound.component';
import { ButtonNormalComponent } from './fabric-components/buttons/button-normal/button-normal.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PterratListComponent } from './pterrat-list/pterrat-list.component';
import { DemoComponent } from './Demo/Demo.component';

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PterratListComponent,
    ButtonNormalComponent,
    ButtonCompoundComponent,
    ButtonHeroComponent,
    ButtonPrimaryComponent,
    ButtonSmallComponent,
    CheckboxComponent,

    BreadcrumbComponent,
    DemoComponent,
    DemoButtonComponent,
    DemoBreadcrumbComponent,
    DemoCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleRoutes
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
