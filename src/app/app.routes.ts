import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutsComponent } from './Common-UI/layouts/layouts.component';
import { canActivateAuth } from './auth/aceess.guard';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

export const routes: Routes = [
    {
    path: '', component: LayoutsComponent, children:[
        {path: '', redirectTo: 'profile/me', pathMatch: 'full'},
        {path: 'search', component: SearchPageComponent},
        {path: 'profile/:id', component: ProfilePageComponent},
        {path: 'settings', component: SettingsPageComponent},
    ],
    canActivate: [canActivateAuth]
   },
   
    {path: 'login', component: LoginPageComponent}
];
