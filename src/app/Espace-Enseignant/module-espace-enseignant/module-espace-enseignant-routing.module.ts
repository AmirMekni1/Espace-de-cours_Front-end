import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { EnseignantComponent } from '../enseignant/enseignant.component';

const routes: Routes = [
  {path : "Profile" , component : ProfileComponent},
  {path : "Enseignant" , component : EnseignantComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEspaceEnseignantRoutingModule { }
