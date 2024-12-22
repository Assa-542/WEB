import { Component, effect, inject } from '@angular/core';
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
[x: string]: any;
  fb = inject(FormBuilder)
  profileService = inject(ProfileService)
  
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{value: '', disabled: true}, Validators.required],
    description: [''],
    stack: ['']
  })

  constructor() {
    effect(() => {
      //@ts-ignore
      this.form.patchValue({
        ...this.profileService.me(),
      //@ts-ignore
        stack: this.mergeStack(this.profileService.me()?.stack)
      })
    });
  }

  ngAfterViewInit() {

  }

  onSave() {
    this.form.markAllAsTouched()
    this.form.updateValueAndValidity()

    if (this.form.invalid) return

    //@ts-ignore
    firstValueFrom(this.profileService.patchProfile(this.form.value))

  }

}
