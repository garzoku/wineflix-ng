import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../wine'

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {
  @Input() wine!: Wine;

  constructor() { }

  ngOnInit(): void {
  }

}
