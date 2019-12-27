import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
//import { LoginCardComponent } from './login.component';
//import { LoginNewComponent } from './login.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [LoginComponent], //, LoginCardComponent, LoginNewComponent
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, 
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule

  ]
})
export class LoginModule { }
