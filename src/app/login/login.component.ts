
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // ****************
  //  INIT some VAR
  // ****************
  signinForm = new FormGroup('');

  // *************************
  //  INIT Value in Login VAR
  // *************************
  // userName = new FormControl('Natale');  
  // userPassword = new FormControl('P@ssword2022');

  userName = new FormControl('');  
  userPassword = new FormControl('');


    constructor(
      private readonly _router : Router
    ) { } 

    ngOnInit(): void {
  }

  sendParametersTologin() {
    this._router.navigate(
      ['menu'],
      {
        queryParams:{
          firstName : "Luis Miguel",
          lastName : "Natale"
        }
      }
    )

  }

  // *****************************************************
  //  Methode apelée lors du click sur le bouton "submit"
  // *****************************************************
  login () {
   alert ('I try To Login');

   const _userName = new FormControl('Natale');

    // ******************
    //  Log pour Checker
    // ******************
   console.log(_userName.value);

   const _userPassword = new FormControl('Password2022');

    // ******************
    //  Log pour Checker
    // ******************
    console.log(_userPassword.value);


    // *************************************
    //  Planned to Simulated
    //  The Process Need to be Implemented
    // *************************************
    let userAuthenticate:boolean = true;
    

    // ************************************
    //  Planned to Simulated Roles Concept
    // ************************************
    let userRoles = [
       {option: 'Master'},         // Information are Loged into Firebase 
       {option: 'Administrator'},  // Information are Loged into Firebase 
       {option: 'SuperUser'},      // Information are Loged into Firebase 
       {option: 'User'},           // Information are Loged into Firebase 
       {option: 'Guest'},          // Some Information are Loged into Firebase
       {option: 'Anonymous'},      // No Information Loged into Firebase
    ]


    // **************************************************
    //  This Function Check if The User is Authenticate
    // **************************************************
    function checkIfUserIsAuthenticate(): Boolean {
      return userAuthenticate;
    };   

    
    // ******************************************
    //  This Function Check The Role of The User
    // ******************************************
    function checkTheUserRole(): string {
      return 'Master'
    }
  }
}
