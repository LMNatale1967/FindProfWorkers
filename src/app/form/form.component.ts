
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  // *****************
  //  INIT Some VAR
  // *****************
  profileID! : string; 
  profileFirstName! : string; 
  profileMiddleInitial!: string; 
  profileLastName! : string; 
  profileMainEMail!: string; 
  profileAlternateEMail!: string; 
  profileMainPhoneNumber! : string; 
  profileMobilePhoneNumber! : string;
  profileCurrentStatus! : string;
  profilePicture!: string;
  profileShortRemarks!: string;


  // *****************
  //  To Remove after 
  // *****************
  public userName!: string;  
  public eMail!: string;

  constructor() {     
  }

  ngOnInit(): void {
  }

  register() {
    alert("You click Sign Up Button !!")

    // ******************
    //  Log pour Checker
    // ******************
    console.log(this.userName);
    console.log(this.eMail);
  }
}

