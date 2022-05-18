import { Component, OnInit, Input } from '@angular/core';
import { Wine } from '../wine';

@Component({
  selector: 'app-wine-category',
  templateUrl: './wine-category.component.html',
  styleUrls: ['./wine-category.component.css']
})
export class WineCategoryComponent implements OnInit {
  @Input() wines!: Wine[];
  @Input() category!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
