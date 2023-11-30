import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './Authentification/connexion/connexion.component';
import { AppComponent } from './app.component';
import { InscriptionEtudiantComponent } from './Authentification/Inscription/inscription-etudiant/inscription-etudiant.component';
import { InscriptionEnseignantComponent } from './Authentification/Inscription/inscription-enseignant/inscription-enseignant.component';
import { PageIntrouvableComponent } from './page-introuvable/page-introuvable.component';
import { EnseignantComponent } from './Espace-Enseignant/enseignant/enseignant.component';
import { EtudiantComponent } from './Espace-Etudiant/etudiant/etudiant.component';

const appRoute: Routes = [
  {path : "" , component : ConnexionComponent },
    {path : "Enseignant" , component : EnseignantComponent},
    {path : "Etudiant" , component :  EtudiantComponent },
    {path : "Inscription" , component : AppComponent , 
  children:[
  {path : "InscriptionEtudiant" , component : InscriptionEtudiantComponent  },
  {path : "InscriptionEnseignant" , component : InscriptionEnseignantComponent}
]},
  {path : "**" , component : PageIntrouvableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
