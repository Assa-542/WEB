import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
http :HttpClient = inject(HttpClient)
  constructor() { }

baseApiUrl:string = 'https://icherniakov.ru/yt-course/'

  getTestAccounts() {
   return this.http.get('${this.baseApiUrl}account/test_accounts')
  }
}
