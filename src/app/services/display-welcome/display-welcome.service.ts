
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DisplayWelcomeService {

  // ******************
  //  Display Welcome
  // ******************
  displayWelcome() {
    // alert("WELCOME to The Presentation  !!");
    console.log("Welcome to The Presentation !!");
  }
}
