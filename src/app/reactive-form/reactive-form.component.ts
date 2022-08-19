
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

// export class ReactiveFormComponent implements OnInit {
  export class AppComponent {

  // *****************
  //  INIT Some VAR
  // *****************
  public signinForm!: FormGroup;
  public form!: FormGroup;

  userName! : string; 
  userEMail!: string; 


  constructor(): void {     
    this.signinForm = new FormGroup({
      userName: new FormControl('', Validators.compose([])),
      userEMail: new FormControl('', Validators.compose([])),
    });
  }


  ngOnInit(): void {
  }

  register() {
    alert("You click Sign Up Button !!")
     console.log(this.signinForm.value);
  }
}
