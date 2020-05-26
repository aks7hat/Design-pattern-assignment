import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import { Routes,RouterModule} from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewNotificationComponent } from './view-notification/view-notification.component'

const routes : Routes=[
  {path:"" ,redirectTo:"login", pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
  {path:"view-notification",component:ViewNotificationComponent}

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
