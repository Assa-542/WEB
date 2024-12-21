import { Component, input } from '@angular/core';
import { ImgUrlPipe } from "../../helpers/pipes/img-url.pipe";
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-profile-header',
  imports: [ImgUrlPipe],
  standalone: true,
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  profile = input<Profile>()
}
