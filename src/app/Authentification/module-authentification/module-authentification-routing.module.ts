import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantComponent } from 'src/app/Espace-Enseignant/enseignant/enseignant.component';
import { EtudiantComponent } from 'src/app/Espace-Etudiant/etudiant/etudiant.component';
import { ConnexionComponent } from '../connexion/connexion.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAuthentificationRoutingModule { }
