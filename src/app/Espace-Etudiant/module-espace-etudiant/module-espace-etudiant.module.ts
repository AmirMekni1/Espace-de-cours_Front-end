import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleEspaceEtudiantRoutingModule } from './module-espace-etudiant-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModuleEspaceEtudiantRoutingModule,
    HttpClientModule
  ]
})
export class ModuleEspaceEtudiantModule { }
