
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  productItems = [
    {name: 'Pizza Margherita', description: 'A hugely popular margherita, with a deliciously tangy single cheese topping.', value:1},
    {name: 'Pizza Double Cheese Margherita', description: 'The ever-popular Margherita - loaded with extra cheese', value:2},
    {name: 'Pizzas Farm House', description: 'A pizza that goes ballistic on veggies !', value:7},
    {name: 'Pizza Peppy Paneer', description: 'The best Mexican Peppy Paneer Pizza', value:4},
    {name: 'Pizza Mexican Green Wave', description: 'The best Mexican Green Wave Pizza', value:5},
    {name: 'Pizza Deluxe Veggie', description: 'The best Deluxe Veggie Pizza', value:6},
    {name: 'Pizza Veg Extravaganza', description: 'The best Veg Extravaganza Pizza', value:8},
    {name: 'Pizza CHEESE N CORN', description: 'The best CHEESE N CORN Pizza', value:1} 
  ]

  displayDescription(pDescription:string, pValue:number, pEvent:any) {
    alert(pDescription + " " + "\n Current Value : " + pValue);
    console.log(pEvent);    
  }

  constructor() { 
  }

  ngOnInit(): void {
  }
}
