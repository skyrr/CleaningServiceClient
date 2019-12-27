import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
//import { LoginCardComponent } from './login.component';
//import { LoginNewComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  // },
  // {
  //   path:'info',
  //   component: LoginCardComponent
  // },
  // {
  //   path: 'new',
  //   component: LoginNewComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
