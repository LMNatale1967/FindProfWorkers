
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})

export class NameEditorComponent implements OnInit {

  form:FormGroup = new FormGroup('');

  userName = new FormControl('');
  userEMail = new FormControl('');

  constructor() { 
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      item: new FormArray([
        new FormGroup({
          name : new FormControl(''),
          quantity : new FormControl('')
        })
      ]),
      userName: new FormControl('', Validators.required),
      userEMail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(1)
      ]))
    })
  }

  updateForm() {
    alert("You Press The Update Button");
    this.userName.setValue("LMNatale");
    this.userEMail.setValue("LuisMiguelNatale@gmail.com");
  }

  addGroup(name: string) {
    (this.form.get('items') as FormArray).push(
      new FormGroup({
        name : new FormControl(''),
        quantity : new FormControl('')
    }));

    // ******************
    //  Log pour Checker
    // ******************
    console.log(this.form.value);
  }


  // *************************************************************
  //  remove The Index Item defined in the removeAt function
  //  Sample : (this.form.get('items') as FormArray).removeAt(0)
  //            remove The Item in Index 0 
  // *************************************************************
  removeGroup() {
    (this.form.get('items') as FormArray).removeAt(0)

    // ******************
    //  Log pour Checker
    // ******************
    console.log(this.form.value);
  }
}


