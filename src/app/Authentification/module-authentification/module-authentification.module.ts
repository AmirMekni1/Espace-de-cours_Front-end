import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleAuthentificationRoutingModule } from './module-authentification-routing.module';
import { ConnexionComponent } from '../connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionEnseignantComponent } from '../Inscription/inscription-enseignant/inscription-enseignant.component';
import { InscriptionEtudiantComponent } from '../Inscription/inscription-etudiant/inscription-etudiant.component';
import { MainInscriptionComponent } from '../Inscription/main-inscription/main-inscription.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ConnexionComponent,
    InscriptionEnseignantComponent,
    InscriptionEtudiantComponent,
    MainInscriptionComponent
  ],
  imports: [
    CommonModule,
    ModuleAuthentificationRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
  ]
})
export class ModuleAuthentificationModule { }
