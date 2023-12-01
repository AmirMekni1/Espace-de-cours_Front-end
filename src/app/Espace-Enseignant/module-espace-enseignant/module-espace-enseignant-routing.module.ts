import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { MainEnseignantComponent } from '../main-enseignant/main-enseignant.component';

const routes: Routes = [
  {path : "" , component : MainEnseignantComponent, children : [
    {path : "profile" , component : ProfileComponent}
  ]}
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEspaceEnseignantRoutingModule { }
