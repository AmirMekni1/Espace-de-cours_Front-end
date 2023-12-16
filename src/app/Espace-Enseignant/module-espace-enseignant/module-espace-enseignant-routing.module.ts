import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { MainEnseignantComponent } from '../main-enseignant/main-enseignant.component';
import { AfficherLesMatieresComponent } from '../CRUD/Matiere/afficher-les-matieres/afficher-les-matieres.component';
import { AjouterUnMatieresComponent } from '../CRUD/Matiere/ajouter-un-matieres/ajouter-un-matieres.component';
import { AjouterUnClasseComponent } from '../CRUD/Class/ajouter-un-classe/ajouter-un-classe.component';
import { AfficherLesClassesComponent } from '../CRUD/Class/afficher-les-classes/afficher-les-classes.component';

const routes: Routes = [
  {
    path: "", component: MainEnseignantComponent, children: [
      { path: "profile", component: ProfileComponent },
      {
        path: "Matiere", component: AfficherLesMatieresComponent, children: [
          { path: "AjouteUnMatiere", component: AjouterUnMatieresComponent },
          { path: "Classes", component: AfficherLesClassesComponent },
          { path: "NouvelleClasse", component: AjouterUnClasseComponent }
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
