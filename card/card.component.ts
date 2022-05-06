import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  data = [{
    "Name" : "Dosa",
    "Type" : "Veg",
    "Cuisine" : "South Indian",
    "Availability" : ["Breakfast","Dinner"],
    "Image" : "https://loremflickr.com/cache/resized/65535_51999886655_371e148086_c_640_480_nofilter.jpg",
    "Price" : 175
  },
  {
    "Name" : "Idly",
    "Type" : "Veg",
    "Cuisine" : "South Indian",
    "Availability" : ["Breakfast","Dinner"],
    "Image" : "http://loremflickr.com/640/480/food",
    "Price" : 50
  },
  {
    "Name" : "Poori",
    "Type" : "Veg",
    "Cuisine" : "South Indian",
    "Availability" : ["Breakfast","Dinner"],
    "Image" : "http://loremflickr.com/640/480/food",
    "Price" : 70
  },
  {
    "Name" : "Chapathi",
    "Type" : "Veg",
    "Cuisine" : "North Indian",
    "Availability" : ["Breakfast","Lunch","Dinner"],
    "Image" : "http://loremflickr.com/640/480/food",
    "Price" : 100
  },
  {
    "Name" : "Grilled Chicken",
    "Type" : "Non-Veg",
    "Cuisine" : "South Indian",
    "Availability" : ["Breakfast","Lunch"],
    "Image" : "http://loremflickr.com/640/480/food",
    "Price" : 400
  },
  {
    "Name" : "Chicken Briyani",
    "Type" : "Non-Veg",
    "Cuisine" : "South Indian",
    "Availability" : ["Lunch","Dinner"],
    "Image" : "http://loremflickr.com/640/480/food",
    "Price" : 230
  },
  {
    "Name" : "Fried Rice",
    "Type" : "Veg",
    "Cuisine" : "North Indian",
    "Availability" : ["Breakfast","Lunch","Dinner"],
    "Image" : "http://loremflickr.com/640/480/food",
    "Price" : 190
  },
  {
    "Name" : "Chicken Lollypop",
    "Type" : "Non-Veg",
    "Cuisine" : "South Indian",
    "Availability" : ["Breakfast","Lunch","Dinner"],
    "Image" : "https://loremflickr.com/cache/resized/65535_51856253868_a943cac4f5_c_640_480_nofilter.jpg",
    "Price" : 300
  },
]

  ngOnInit(): void {
    
  }

}
