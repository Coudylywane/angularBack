import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrageRoutingModule } from './parametrage-routing.module';
import { ParametrageComponent } from './parametrage.component';
import { AnneesComponent } from './components/annees/annees.component';
import { CyclesComponent } from './components/cycles/cycles.component';
import { NiveauxComponent } from './components/niveaux/niveaux.component';
import { ClassesComponent } from './components/classes/classes.component';


@NgModule({
  declarations: [
    ParametrageComponent,
    AnneesComponent,
    CyclesComponent,
    NiveauxComponent,
    ClassesComponent
  ],
  imports: [
    CommonModule,
    ParametrageRoutingModule
  ]
})
export class ParametrageModule { }
