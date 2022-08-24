
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProfilesListService {

    constructor() {     
    }

    getProfiles() {
        return  [
                  {
                    "profileID" : "70f4df49-1d24-496c-b972-6272f428701c",
                    "profileFirstName" : "Luis Miguel",
                    "profileMiddleInitial" : "M",
                    "profileLastName" : "Natale",
                    "profileMainEMail" : "LuisMiguelNatale@gmail.com",
                    "profileAlternateEMail" : "LMNatale@hotmail.com",
                    "profileMainPhoneNumber" : "+41 79 342 84 22",
                    "profileMobilePhoneNumber" : "+41 79 342 84 22",
                    "profileCurrentStatus" : "Available",
                    "profilePicture" : "./assets/data/profiles/",
                    "profileShortRemarks" : "No Remarks",
                   }, {    
                    "profileID" : "c3f69867-e099-4d26-b713-49af1790287e",
                    "profileFirstName" : "Michelina Sussana",
                    "profileMiddleInitial" : "S",
                    "profileLastName" : "Beck",
                    "profileMainEMail" : "MichelinaBeck@gmail.com",
                    "profileAlternateEMail" : "MBeck@hotmail.com",
                    "profileMainPhoneNumber" : "+41 79 342 84 23",
                    "profileMobilePhoneNumber" : "+41 79 342 84 23",
                    "profileCurrentStatus" : "Available",
                    "profilePicture" : "./assets/data/profiles/",
                    "profileShortRemarks" : "No Remarks",
                  }, {
                    "profileID" : "cc5b8c13-ed66-4ad0-b436-c4ef969703ed",
                    "profileFirstName" : "Emanuel David",
                    "profileMiddleInitial" : "D",
                    "profileLastName" : "Natale",
                    "profileMainEMail" : "EManuelDavidk@gmail.com",
                    "profileAlternateEMail" : "EDavid@hotmail.com",
                    "profileMainPhoneNumber" : "+41 79 342 84 24",
                    "profileMobilePhoneNumber" : "+41 79 342 84 24",
                    "profileCurrentStatus" : "Available",
                    "profilePicture" : "./assets/data/profiles/",
                    "profileShortRemarks" : "No Remarks",
                   }, {
                    "profileID" : "33aeb48a-ede0-4e6d-9819-54082c6ec445",
                    "profileFirstName" : "Veronica Anastasia",
                    "profileMiddleInitial" : "A",
                    "profileLastName" : "Natale",
                    "profileMainEMail" : "VeronicaAnastasia@gmail.com",
                    "profileAlternateEMail" : "VAnastasia@hotmail.com",
                    "profileMainPhoneNumber" : "+41 79 342 84 25",
                    "profileMobilePhoneNumber" : "+41 79 342 84 25",
                    "profileCurrentStatus" : "NOT Available",
                    "profilePicture" : "./assets/data/profiles/",
                    "profileShortRemarks" : "Can Work Only 80% - ",
                   }
                ];
        }
}

