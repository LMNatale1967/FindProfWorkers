
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
  selector: 'app-form-control-editor',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})


export class FormControlComponent {
  public signinForm!: FormGroup;
  
  // Alternate Solution
  // public name = new FormControl('');
  // public userName = new FormControl('');
  // public userEMail = new FormControl('');

  public name = new FormControl('Luly');
  public userName = new FormControl('Luis Miguel Natale');
  public userEMail = new FormControl('LuisMiguelNatale@gmail.com');


  register() {
    alert("You click Sign Up Button !!")

    // ******************
    //  Log pour Checker
    // ******************
    console.log(this.name);
    console.log(this.userName);
    console.log(this.userEMail);
    console.log(this.signinForm.value);
  }

  updateName() {
    this.name.setValue("LMNatale")
  }
}



