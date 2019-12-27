import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListComponent } from './client-list/client-list.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [ClientListComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatTabsModule
  ]
})
export class ClientsModule { }
