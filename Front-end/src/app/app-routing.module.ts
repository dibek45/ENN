import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {SignInComponent} from './user/sign-in/sign-in.component';


const routes: Routes = [

  { path: 'signup', component: UserComponent,
    children:[{path:'', component:SignInComponent}]
  },
  {path: '**',redirectTo:'/login',pathMatch: 'full'},
  {path: '',redirectTo:'/login',pathMatch: 'full'},

  { path: 'login', component: UserComponent,
    children:[{path:'', component:SignInComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
