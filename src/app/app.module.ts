import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { WineComponent } from './wine/wine.component';
import { WineCategoryComponent } from './wine-category/wine-category.component';

@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    WineCategoryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
