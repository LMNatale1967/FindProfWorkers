
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})


export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
  })
 });


 updateProfile() {
    // ******************
    //  Log pour Checker
    // ******************
    console.log("Nothing To do For the Moment");

    this.profileForm.patchValue({

      // address: {
      //   street: 'Place des Agustins N° 17',
      //   city: "Genève",
      //   state: "GE",
      //   zip: "1205"
      // }
    });
 }
}
