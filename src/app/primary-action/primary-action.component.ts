import { Component, OnInit, Input } from '@angular/core';
import { faPlay, faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-primary-action',
  templateUrl: './primary-action.component.html',
  styleUrls: ['./primary-action.component.css']
})
export class PrimaryActionComponent implements OnInit {
  @Input() icon!: IconDefinition;
  constructor() { }

  ngOnInit(): void {
  }

}
