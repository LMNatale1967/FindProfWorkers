import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  footer = "ORDER - 0.00 CHF";
  totalPrice : number = 100.00;
  @Input() price!:number;

  // *************************************
  // Test The Curent Status of The Worker
  // *************************************
  status:string = "NOT Available";
  //status:string = "Available";

  constructor() {     
  }

  ngOnInit(): void {
  }

  ionOnlyDescription() {
    alert("I'm a poor <ion-button> With Stranges Properties");
  }
}
