import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';





const APP_ROUTES: Routes=[
    { path: 'home', component: HomeComponent },
    {path:'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);