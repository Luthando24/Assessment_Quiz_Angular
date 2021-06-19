
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login';
import { AssessmentComponent } from './assessment/assessment.component';
import { Assessment2Component } from './assessment2/assessment2.component';

import { CounterComponent } from './counter/counter.component';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    {path: 'assessment', component: AssessmentComponent},
    {path: 'assessment2', component: Assessment2Component},
    { path: 'aboutus', component: AboutusComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'counter', component: CounterComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);