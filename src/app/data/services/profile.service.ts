import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
http :HttpClient = inject(HttpClient)
  constructor() { }

baseApiUrl:string = 'https://icherniakov.ru/yt-course/'

  getTestAccounts() {
   return this.http.get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts')
  }
}
