
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // ***********************
  //  Define The title VAR
  // ***********************
  title = 'WW_Angualar_01';

  // *********************************************************
  //  The menuItems Is Defined Here and NOT more in the Child
  // *********************************************************
  menuItems = [
    {name: 'Food'},
    {name: 'Drink'},
    {name: 'Desserts'},
    {name: 'Salads'}  
  ]
}
