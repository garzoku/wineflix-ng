import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-content-title-image',
  templateUrl: './hero-content-title-image.component.html',
  styleUrls: ['./hero-content-title-image.component.css']
})
export class HeroContentTitleImageComponent {

  @Input() heroContent!: Hero;


}
