import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { WineComponent } from './wine/wine.component';
import { WineCategoryComponent } from './wine-category/wine-category.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeroContentTitleImageComponent } from './hero-content-title-image/hero-content-title-image.component';
import { HeroContentDescriptionComponent } from './hero-content-description/hero-content-description.component';

@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    WineCategoryComponent,
    NavigationComponent,
    HeroImageComponent,
    HeroContentTitleImageComponent,
    HeroContentDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
