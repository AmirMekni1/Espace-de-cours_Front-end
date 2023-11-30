import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleAuthentificationRoutingModule } from './module-authentification-routing.module';
import { ConnexionComponent } from '../connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionEnseignantComponent } from '../Inscription/inscription-enseignant/inscription-enseignant.component';
import { InscriptionEtudiantComponent } from '../Inscription/inscription-etudiant/inscription-etudiant.component';

@NgModule({
  declarations: [
    ConnexionComponent,
    InscriptionEnseignantComponent,
    InscriptionEtudiantComponent
  ],
  imports: [
    CommonModule,
    ModuleAuthentificationRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ModuleAuthentificationModule { }
