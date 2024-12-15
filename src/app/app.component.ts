import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from "./Common-UI/profile-card/profile-card.component";
import { ProfileService } from './data/services/profile.service';
import { Profile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent,],
  
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
json: any;
profile: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  profileService = inject(ProfileService)
  profiles: Profile[] = []

  constructor () {
    this.profileService.getTestAccounts()
    .subscribe(val => {
      this.profiles = val
  })





  }
}


