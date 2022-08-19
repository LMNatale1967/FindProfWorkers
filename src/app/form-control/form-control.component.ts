
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-form-control',
//   templateUrl: './form-control.component.html',
//   styleUrls: ['./form-control.component.scss']
// })

// export class FormControlComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
// }


import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})


export class FormControlComponent {
  public signinForm!: FormGroup;
  
  // Alternate Solution
  // public name = new FormControl('');
  // public userName = new FormControl('');
  // public userEMail = new FormControl('');

  public name = new FormControl('LMNatale');
  public userName = new FormControl('Luis Miguel Natale');
  public userEMail = new FormControl('LuisMiguelNatale@gmail.com');


  register() {
    alert("You click Sign Up Button !!")
    console.log(this.name);
    console.log(this.userName);
    console.log(this.userEMail);
  }

}

