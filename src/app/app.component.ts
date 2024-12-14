import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from "./Common-UI/profile-card/profile-card.component";
import { ProfileService } from './data/services/profile.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent,JsonPipe],
  
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileService = inject(ProfileService)
  profiles: any [] = []

  constructor () {
    this.profileService.getTestAccounts()
    .subscribe(val => {
      this.profiles = val
  })




  
  }
}


