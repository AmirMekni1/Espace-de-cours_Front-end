import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from '../connexion/connexion.component';
import { InscriptionEtudiantComponent } from '../Inscription/inscription-etudiant/inscription-etudiant.component';
import { InscriptionEnseignantComponent } from '../Inscription/inscription-enseignant/inscription-enseignant.component';

const routes: Routes = [
  {path : "" , component : ConnexionComponent},
  {path : "InscriptionEtudiant" , component : InscriptionEtudiantComponent  },
  {path : "InscriptionEnseignant" , component : InscriptionEnseignantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAuthentificationRoutingModule { }
