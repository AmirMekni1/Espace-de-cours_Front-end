import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIntrouvableComponent } from '../../app/page-introuvable/page-introuvable.component';

const appRoute: Routes = [
  
  { path: "", loadChildren: () => import("../../app/Authentification/module-authentification/module-authentification.module").then(e => e.ModuleAuthentificationModule) },
  { path: "Etudiant", loadChildren: () => import("../../app/Espace-Etudiant/module-espace-etudiant/module-espace-etudiant.module").then(e => e.ModuleEspaceEtudiantModule) },
  { path: "Enseignant", loadChildren: () => import("../../app/Espace-Enseignant/module-espace-enseignant/module-espace-enseignant.module").then(e => e.ModuleEspaceEnseignantModule) },
  { path: "**", component: PageIntrouvableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
