import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { MainEnseignantComponent } from '../main-enseignant/main-enseignant.component';
import { AfficherLesMatieresComponent } from '../CRUD/Matiere/afficher-les-matieres/afficher-les-matieres.component';
import { AjouterUnMatieresComponent } from '../CRUD/Matiere/ajouter-un-matieres/ajouter-un-matieres.component';
import { AjouterDocumentComponent } from '../CRUD/Document/ajouter-document/ajouter-document.component';
import { AfficherDocumentComponent } from '../CRUD/Document/afficher-document/afficher-document.component';
import { MeetComponent } from '../MEET/meet/meet.component';

const routes: Routes = [
  {
    path: "", component: MainEnseignantComponent, children: [
      { path: "profile", component: ProfileComponent },
      {
        path: "Matiere", component: AfficherLesMatieresComponent, children: [
          { path: "AjouteUnMatiere", component: AjouterUnMatieresComponent },
          { path: "AjouteUnMatiere", component: AjouterDocumentComponent },
          { path: "AfficherMatiere", component: AfficherDocumentComponent },
        ]
      },{ path: "FaceToFace", component: MeetComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEspaceEnseignantRoutingModule { }
