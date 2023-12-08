import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { MainEnseignantComponent } from '../main-enseignant/main-enseignant.component';
import { AfficherLesMatieresComponent } from '../CRUD/Matiere/afficher-les-matieres/afficher-les-matieres.component';
import { AjouterUnMatieresComponent } from '../CRUD/Matiere/ajouter-un-matieres/ajouter-un-matieres.component';

const routes: Routes = [
  {
    path: "", component: MainEnseignantComponent, children: [
      { path: "profile", component: ProfileComponent },
      {
        path: "Matiere", component: AfficherLesMatieresComponent, children: [
          { path: "AjouteUnMatiere", component: AjouterUnMatieresComponent }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEspaceEnseignantRoutingModule { }
