import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {ProfileCardComponent} from '../../Common-UI/profile-card/profile-card.component';
import {ProfileService} from '../../data/services/profile.service';
import {ProfileFiltersComponent} from './profile-filters/profile-filters.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    ProfileCardComponent,
    ProfileFiltersComponent,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService)
  profiles = this.profileService.filteredProfiles

  constructor() {


  }
}
