
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
  signinForm = new FormGroup({
    userName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email,
      Validators.minLength(9),
      Validators.maxLength(25)
    ])),

    userPassword: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(15)
    ]))
  });

  // ******************************
  //  INIT Value in The Login VAR
  //  NOT WORKING !
  // ******************************
  userName = new FormControl("LuisMiguelNatale@gmail.com");  
  userPassword = new FormControl('R@B1MS31BGcC');
  printInformation = new FormControl('');


    constructor(
      private readonly _router : Router
    ) {} 

    ngOnInit(): void {
    }

  // ********************************
  //  Send Fake Values To The Fields 
  // ********************************
  sendParametersTologin() {
    this._router.navigate(
      ['login'],
      {
        queryParams:{
          userName : "LuisMiguelNatale@gmail.com",
          userPassword : "R@B1MS31BGcC"
        }
      }
    )
  }


  // ****************************
  //  Try to Update The Porfile
  //  This solution Work Fine 
  // ****************************
    updateProfile() {
     this.signinForm.patchValue(
        { 
         userName: 'LuisMiguelNatale@gmail.com',
        userPassword: 'R@B1MS31BGcC'
        }
      );
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

   const _userPassword = new FormControl('');

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


    // **************************************************************
    //  Main Validation Process to Check If the User is a Valid User
    //                  !!!!!!! NOT USED !!!!!!!
    // **************************************************************
    // function validdateLogin(): Boolean {
    //   var isValidUser  = false;

    //   alert ("I'm in validator process");

    //   // if (this. username == "") || (_userPassword == "") {
    //   //   isValidUser = false;
    //   // } else {
    //   //   isValidUser = true;
    //   //   // Validation Process
    //   // }

    //   return isValidUser;
    // }
  }

  // ************************
  //  Display an Easter Eggs
  //  NOT Working !
  // ************************
  displayEasterEggs(pSrc:string, pWidth:number, pHeight:number, pAlt:string): void {

    var img = document.createElement("img");
    img.src = pSrc;
    img.width = pWidth;
    img.height = pHeight;
    img.alt = pAlt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
  } 

  // **************************************************************
  //  Main Validation Process to Check If the User is a Valid User
  // **************************************************************
  validateLogin(): Boolean {
    alert ("I'm In The Validator Login Process");

    // ****************************************************************************
    //  1st Check If Field userName is NOT empty and Valid
    //  2nd Check If Field userPassword is NOT empty and valid
    //  3rd Check If User Exist in Firebase
    //  If NO  - Useer Role is Guest or Anonymous - Propose a sugestion to User ? 
    //  If YES - Check The User Role (This Iformation Define the Fields display or NOT)
    //  The User Role define the Information to Display
    //  If NO  - Inform User about the possiblity to Subscribe on a Payd Version
    //  If User Accept Propose The Subscription Contract
    // ****************************************************************************

      return false
  }

  // *******************************
  //  Set a Name or E-Mail address 
  //  Easy Access With only a click
  // *******************************
  setUserName() {
    this.signinForm.patchValue(
      {
        userName: 'LuisMiguelNatale@gmail.com'
     }
   );
  }


  // *******************************
  //  Set a Guest Password 
  //  Easy Access With only a click
  // *******************************
  setUserPassword() {
     this.signinForm.patchValue(
       {
         userPassword: 'R@B1MS31BGcC'
      }
    );
   }


  // *******************************
  //  Print The Version Information
  // *******************************
   printVersionInformation() {
      alert ("I'm In The print Version Information Process");
      // Nothing To Do for The Moment    
   }
  }
