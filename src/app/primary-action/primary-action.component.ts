import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-primary-action',
  templateUrl: './primary-action.component.html',
  styleUrls: ['./primary-action.component.css']
})
export class PrimaryActionComponent {
  @Input() icon!: IconDefinition;
  text = 'Drink';
}
