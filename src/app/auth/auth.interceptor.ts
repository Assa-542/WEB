import { HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { BehaviorSubject, catchError, filter, switchMap, tap, throwError } from "rxjs";

let isRefrshing$ = new BehaviorSubject<boolean>(false)

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService)
    const token = authService.token

    if (!token) return next(req)
    
    
    if(isRefrshing$.value) {
        return refreshAndProceed(authService, req, next)
    }
  
    return next(addToken(req, token))
    .pipe(
      catchError(error => {
        if (error.status === 403){
            return refreshAndProceed(authService, req, next)

        }

        return throwError(error)
      })
    )
}

const refreshAndProceed = (
    authService: AuthService,
    req: HttpRequest<any>,
    next: HttpHandlerFn
    ) => {
        if(!isRefrshing$.value) {
            isRefrshing$.next(true)
            return authService.refreshAuthToken()
             .pipe(
              switchMap((res) => {
                
            return next(addToken(req, res.access_token))
            .pipe(
                tap(() => isRefrshing$.next(false))
                
            )
        })
      )
     }

     if (req.url.includes('refresh')) return next(addToken(req, authService.token!))
    
     return isRefrshing$.pipe(
        filter(isRefrshing => !isRefrshing),
        switchMap(res => {
            return next(addToken(req, authService.token!))
        })
     )

}


const addToken = (req: HttpRequest<any>, token: string) => {
    return req = req.clone( {
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    })
}