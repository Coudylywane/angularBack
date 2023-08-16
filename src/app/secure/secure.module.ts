import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { AnneeService } from './shared/services/annee.service';


@NgModule({
  declarations: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ],
  providers: [
    AnneeService
  ]
})
export class SecureModule { }
