import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/shared-module/card/card.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
