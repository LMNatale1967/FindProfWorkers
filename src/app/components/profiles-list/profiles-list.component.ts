
import { Component, OnInit } from '@angular/core';
import { ProfilesListService } from 'src/app/services/profile-list/profiles-list.service';


@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})

export class ProfilesListComponent implements OnInit {

  public title = 'Profiles List'
  public profiles :any = [];

  constructor() {     
      let profiles = new ProfilesListService();
      this.profiles = profiles.getProfiles();
  }

  ngOnInit(): void {
  }
}




