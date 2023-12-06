import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleAuthentificationRoutingModule } from './module-authentification-routing.module';
import { ConnexionComponent } from '../connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionEnseignantComponent } from '../Inscription/inscription-enseignant/inscription-enseignant.component';
import { InscriptionEtudiantComponent } from '../Inscription/inscription-etudiant/inscription-etudiant.component';
import { MainInscriptionComponent } from '../Inscription/main-inscription/main-inscription.component';
import { RouterModule } from '@angular/router';
import { MotDePasseOublierComponent } from '../V_Email-R_Mot-De-Passe/Mot-De-Passe/mot-de-passe-oublier/mot-de-passe-oublier.component';
import { NouvelleMotDePasseComponent } from '../V_Email-R_Mot-De-Passe/Mot-De-Passe/nouvelle-mot-de-passe/nouvelle-mot-de-passe.component';
import { VerificationEmailComponent } from '../V_Email-R_Mot-De-Passe/verification-email/verification-email.component';

@NgModule({
  declarations: [
    ConnexionComponent,
    InscriptionEnseignantComponent,
    InscriptionEtudiantComponent,
    MainInscriptionComponent,
    MotDePasseOublierComponent,
    NouvelleMotDePasseComponent,
    VerificationEmailComponent

  ],
  imports: [
    CommonModule,
    ModuleAuthentificationRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
  ]
})
export class ModuleAuthentificationModule { }
