import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs';
import { TokenResponce } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  baseApiUrl = `https://icherniakov.ru/yt-course/auth/`
  
  token: string | null = null
  refreshtoken: string | null = null

  get isAuth() {
    return !!this.token
  }
  login(payload: {username: string, password: string}) {
    const fd = new FormData()

    fd.append('username', payload.username)
    fd.append('password', payload.password)
    
    return this.http.post<TokenResponce>(
      `${this.baseApiUrl}token`,
      fd
      ).pipe(
        tap( val => {
        this.token = val.access_token
        this.refreshtoken = val.refresh_token

        })
      )
  }
}
