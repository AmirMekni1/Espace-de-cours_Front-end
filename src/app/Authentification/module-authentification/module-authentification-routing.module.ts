import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInscriptionComponent } from '../Inscription/main-inscription/main-inscription.component';
import { InscriptionEtudiantComponent } from '../Inscription/inscription-etudiant/inscription-etudiant.component';
import { InscriptionEnseignantComponent } from '../Inscription/inscription-enseignant/inscription-enseignant.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { MainEnseignantComponent } from 'src/app/Espace-Enseignant/main-enseignant/main-enseignant.component';
import { MainEtudiantComponent } from 'src/app/Espace-Etudiant/main-etudiant/main-etudiant.component';
import { InscriptionEtudiantEnseignantComponent } from '../Inscription/inscription-etudiant-enseignant/inscription-etudiant-enseignant.component';
const routes: Routes = [
  { path: "", component: ConnexionComponent },
  {
    path: "Inscription", component: MainInscriptionComponent, children: [
      { path: "InscriptionEtudiant", component: InscriptionEtudiantComponent },
      { path: "InscriptionEnseignant", component: InscriptionEnseignantComponent },
      { path: "PageLogin", component: ConnexionComponent },
      
    ]
  },{ path: "IEE", component: InscriptionEtudiantEnseignantComponent },
  { path: "Enseignant", component: MainEnseignantComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAuthentificationRoutingModule { }
