
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

  export class ProfileEditorComponent {

    userName = new FormControl('');
    userEMail = new FormControl('');

        constructor() {     
        }
  
        ngOnInit(): void {
        }
  }


  // export class ReactiveFormComponent implements OnInit {
  // export class AppComponent {

  //   // *****************
  //   //  INIT Some VAR
  //   // *****************
  //   userName = new FormControl('');
  //   userEMail = new FormControl(''); 

  //   constructor() {     
  //   }
  
  //   ngOnInit(): void {
  //   }
  
  //   register() {
  //     alert("You click Sign Up Button !!")
  //     console.log(this.userName);
  //     console.log(this.userEMail);
  //   }
  
  //   // this.signinForm = new FormGroup({
  //   //   userEMail: new FormControl('', Validators.compose([
  //   //     Validators.userEMail,
  //   //     Validators.required
  //   //   ])),
  //   //   userName: new FormControl('', Validators.compose([]))
  //   // });

    
  //   // constructor(): void {     
  //   //   this.signinForm = new FormGroup({
  //   //     userName: new FormControl('', Validators.compose([])),
  //   //     userEMail: new FormControl('', Validators.compose([])),
  //   //   });
  //   // }

  //   // ngOnInit(): void {
  //   // }

  //   // register() {
  //   //   alert("You click Sign Up Button !!")
  //   //   console.log(this.signinForm.value);
  //   // }
// }
