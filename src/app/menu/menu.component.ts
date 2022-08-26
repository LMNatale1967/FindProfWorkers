
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  // ***********************************************
  //  Input The menuItems To The Main app.component
  // ***********************************************
  // @Input() menuItems?: any[];
  // @Input() menuOptions?: any[];
  

  menuItems = [
    {name: 'Food'},
    {name: 'Drinks'},
    {name: 'Dessers'},
    {name: 'Salads'}
  ]

  menuOptions = [
    {option: 'Full Porfile List', optionID: "1"},
    {option: 'Profile (Short version)', optionID: "2"},
    {option: 'Profile (Long version)', optionID: "3"},
    {option: 'Profile (Competences)', optionID: "4"},
    {option: 'Profile (Documents)', optionID: "5"},
    {option: 'Profile (Trainings)', optionID: "6"},
    {option: 'Profile (Requirements)', optionID: "7"}
  ]

  
  constructor(   
    // *********************************************
    //  Recuperation des Parametres recu via l'URL
    // *********************************************
    private readonly _route : ActivatedRoute
  ) {}

  // *********************************************
  //  Alternate Solution to Get onyl a Parameter
  //  To Check This Alternate Solution ? NOT WORK
  // *********************************************
  // ngOnInit() {
  //   this.firstName = this._route.snapshot.params.firstName || null
  //   // ******************
  //   //  Log pour Checker
  //   // ******************
  //   console.log(this.firstName)
  // }

  ngOnInit(): void {
    const queryParams = this._route.snapshot.queryParamMap;
    // ******************
    //  Log pour Checker
    // ******************
    console.log(queryParams)
  }


  displayFULL_PORFILE_LIST() {
    alert ("I'm on displayFULL_PORFILE_LIST()")
  };

  displayPROFILE_SHORT_VERSION(){
    alert ("I'm on displayFULL_PROFILE_SHORT_VERSION")
  };

  displayPROFILE_LONG_VERSION(){
    alert ("I'm on displayPROFILE_LONG_VERSION")
  };

  displayPROFILE_Competences() {
    alert ("I'm on displayPROFILE_Competences")
  };

  displayPROFILE_DOCUMENTS() {
    alert ("I'm on displayPROFILE_DOCUMENTS")
  };

  displayPROFILE_TRAININGS() {
    alert ("I'm on displayPROFILE_TRAINING")
  };

  displayPROFILE_REQUIREMENTS() {
    alert ("I'm on PROFILE_REQUIREMENTS")
  };

  displayOptionID(pMenuOptionID:number) {
    alert ("Menu Option ID : " + pMenuOptionID)
  };
}
