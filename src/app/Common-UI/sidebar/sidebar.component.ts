import {AsyncPipe, JsonPipe, NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {firstValueFrom} from 'rxjs';
import {ProfileService} from '../../data/services/profile.service';
import {ImgUrlPipe} from '../../helpers/pipes/img-url.pipe';
import {SvgIconComponent} from '../svg-icon/svg-icon.component';
import {SubscriberCardComponent} from './subscriber-card/subscriber-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    NgForOf,
    RouterLink,
    ImgUrlPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService)
  subcribers$ = this.profileService.getSubscribersShortList()

  me = this.profileService.me

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: 'profile/me'
    },
    {
      label: 'Чаты',
      icon: 'chat',
      link: 'chat'
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search'
    },
  ]

  ngOnInit() {
    firstValueFrom(this.profileService.getMe())
  }

}



