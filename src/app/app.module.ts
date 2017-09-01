import { ButtonSmallComponent } from './fabric-components/buttons/button-small/button-small.component';
import { ButtonPrimaryComponent } from './fabric-components/buttons/button-primary/button-primary.component';
import { ButtonHeroComponent } from './fabric-components/buttons/button-hero/button-hero.component';
import { ButtonCompoundComponent } from './fabric-components/buttons/button-compound/button-compound.component';
import { ButtonNormalComponent } from './fabric-components/buttons/button-normal/button-normal.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PterratListComponent } from './pterrat-list/pterrat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PterratListComponent,
    ButtonNormalComponent,
    ButtonCompoundComponent,
    ButtonHeroComponent,
    ButtonPrimaryComponent,
    ButtonSmallComponent

],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
