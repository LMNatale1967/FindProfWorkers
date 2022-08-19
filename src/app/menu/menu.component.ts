
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  // ***********************************************
  //  Input The menuItems To The Main app.component
  // ***********************************************
  @Input() menuItems?: any[];
  
  constructor() {     
  }

  ngOnInit(): void {
  }
}
