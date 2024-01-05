import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEtudiantComponent } from '../main-etudiant/main-etudiant.component';
import { ProfileComponent } from '../profile/profile.component';
import { AfficherLesMatiereComponent } from '../Matiere/afficher-les-matiere/afficher-les-matiere.component';
import { RejoindreACoursComponent } from '../Matiere/rejoindre-a-cours/rejoindre-a-cours.component';

const routes: Routes = [
  {
    path: "", component: MainEtudiantComponent, children: [
      { path: "profile", component: ProfileComponent },
      { path: "Matiere", component: AfficherLesMatiereComponent , children: [
        { path: "RejoidreAcours", component: RejoindreACoursComponent }
      ] }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEspaceEtudiantRoutingModule { }
