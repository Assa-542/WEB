import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from "../../Common-UI/profile-header/profile-header.component";
import { ProfileService } from '../../data/services/profile.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import id from '@angular/common/locales/id';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { ImgUrlPipe } from "../../helpers/pipes/img-url.pipe";
import { PostFeedComponent } from "./post-feed/post-feed.component";

@Component({
  selector: 'app-profile-page',
  imports: [
    ProfileHeaderComponent,
    AsyncPipe,
    RouterLink,
    ImgUrlPipe,
    PostFeedComponent
],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  profileService = inject(ProfileService)
  route = inject(ActivatedRoute)

me$ = toObservable(this.profileService.me)
subscribers$ = this.profileService.getSubscribersShortList(5)
  profile$ = this.route.params
  .pipe(
    switchMap(({id}) => {
      if (id === 'me') return this.me$


      return this.profileService.getAccount(id)
    }) 
  )
skill: any;
    



}
