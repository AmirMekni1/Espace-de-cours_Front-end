import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleEspaceEnseignantRoutingModule } from './module-espace-enseignant-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { MainEnseignantComponent } from '../main-enseignant/main-enseignant.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { AfficherLesMatieresComponent } from '../CRUD/Matiere/afficher-les-matieres/afficher-les-matieres.component';
import { AjouterUnMatieresComponent } from '../CRUD/Matiere/ajouter-un-matieres/ajouter-un-matieres.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    MainEnseignantComponent,
    HeaderComponent,
    FooterComponent,
    AfficherLesMatieresComponent,
    AjouterUnMatieresComponent
  ],
  imports: [
    CommonModule,
    ModuleEspaceEnseignantRoutingModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    RouterModule
    
  ]
})
export class ModuleEspaceEnseignantModule { }
