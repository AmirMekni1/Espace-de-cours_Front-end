import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEtudiantComponent } from '../main-etudiant/main-etudiant.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  {
    path: "", component: MainEtudiantComponent, children: [
      { path: "profile", component: ProfileComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEspaceEtudiantRoutingModule { }
