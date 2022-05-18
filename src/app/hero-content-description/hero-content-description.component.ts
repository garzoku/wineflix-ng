import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-content-description',
  templateUrl: './hero-content-description.component.html',
  styleUrls: ['./hero-content-description.component.css']
})
export class HeroContentDescriptionComponent {
  @Input() heroContent!: Hero;
}
