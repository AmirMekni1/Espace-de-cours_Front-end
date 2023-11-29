import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleAuthentificationRoutingModule } from './module-authentification-routing.module';
import { ConnexionComponent } from '../connexion/connexion.component';
import { ModuleEspaceEnseignantModule } from 'src/app/Espace-Enseignant/module-espace-enseignant/module-espace-enseignant.module';
import { ModuleEspaceEtudiantModule } from 'src/app/Espace-Etudiant/module-espace-etudiant/module-espace-etudiant.module';


@NgModule({
  declarations: [
    ConnexionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModuleAuthentificationRoutingModule,
    ModuleEspaceEtudiantModule,
    ModuleEspaceEnseignantModule
  ]
})
export class ModuleAuthentificationModule { }
