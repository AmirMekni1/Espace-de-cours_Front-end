import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleEspaceEtudiantRoutingModule } from './module-espace-etudiant-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MainEtudiantComponent } from '../main-etudiant/main-etudiant.component';
import { ProfileComponent } from '../profile/profile.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    MainEtudiantComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ModuleEspaceEtudiantRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    

  ]
})
export class ModuleEspaceEtudiantModule { }
