import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from "../../Common-UI/profile-header/profile-header.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-settings-page',
  imports: [
    ProfileHeaderComponent,
    ReactiveFormsModule,

  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {
  fb = inject(FormBuilder)
  rofileService = inject(ProfileService)
  
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    description: [''],
    stack: ['']
  })
}
