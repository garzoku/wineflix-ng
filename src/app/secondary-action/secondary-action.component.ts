import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-secondary-action',
  templateUrl: './secondary-action.component.html',
  styleUrls: ['./secondary-action.component.css']
})
export class SecondaryActionComponent {
  @Input() icon!: IconDefinition;
  text = 'More Info';
}
