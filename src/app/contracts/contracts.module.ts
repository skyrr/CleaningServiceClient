import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [ContractListComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    MatTabsModule
  ]
})
export class ContractsModule { }
