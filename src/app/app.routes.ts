import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutsComponent } from './Common-UI/layouts/layouts.component';
import { canActivateAuth } from './auth/aceess.guard';

export const routes: Routes = [
    {
        path: '', component: LayoutsComponent, children:[
        {path: '', component: SearchPageComponent},
        {path: 'profile', component: ProfilePageComponent}
    ],
    canActivate: [canActivateAuth]
   },
    
    {path: 'login', component: LoginPageComponent}
];
