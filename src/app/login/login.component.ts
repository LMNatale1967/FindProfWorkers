
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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


    constructor() { 
    } 

    ngOnInit(): void {
  }

  // *****************************************************
  // Mwethode apelée lors du click sur le bouton "submit"
  // *****************************************************
  login () {
   alert ('I try To Login');

   const _userName = new FormControl('Natale');
   console.log(_userName.value);

   const _userPassword = new FormControl('Password2022');
   console.log(_userPassword.value);

  } 
}
