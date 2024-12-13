import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from "./Common-UI/profile-card/profile-card.component";
import { ProfileService } from './data/services/profile.service';
import { observeOn } from 'rxjs';
import { JsonPipe } from 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileService = inject(ProfileService)
  profiles: any= []
json: any;

  constructor () {
    this.profileService.getTestAccounts()
    .subscribe(val => {
      this.profiles = val
  })

}

}


