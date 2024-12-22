import { Component, OnDestroy, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../../data/services/profile.service';
import { Subscription, debounce, debounceTime, startWith, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile-filters.component.html',
  styleUrl: './profile-filters.component.scss'
})
export class ProfileFiltersComponent implements OnDestroy {
  fb = inject(FormBuilder);
  ProfileService = inject(ProfileService);

  searchForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    stack: [''],
  })

  searchFormSub!: Subscription

constructor() {
  this.searchFormSub = this.searchForm.valueChanges
  .pipe(
    startWith({}),
    debounceTime(300),
    switchMap(formvalue => {
      return this.ProfileService.filterProfiles(formvalue)
    }),
  )
  .subscribe()
}


ngOnDestroy() {
  this.searchFormSub.unsubscribe()
} 

}
