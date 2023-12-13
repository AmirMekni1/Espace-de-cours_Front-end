import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModuleAuthentificationRoutingModule } from './module-authentification-routing.module';
import { ConnexionComponent } from '../connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionEnseignantComponent } from '../Inscription/inscription-enseignant/inscription-enseignant.component';
import { InscriptionEtudiantComponent } from '../Inscription/inscription-etudiant/inscription-etudiant.component';
import { MainInscriptionComponent } from '../Inscription/main-inscription/main-inscription.component';
import {  RouterModule } from '@angular/router';
import { VerificationEmailComponent } from '../V_Email-R_Mot-De-Passe/verification-email/verification-email.component';
import { ResetPasswordComponent } from '../V_Email-R_Mot-De-Passe/Mot-De-Passe/reset-password/reset-password.component';
import { NewPasswordComponent } from '../V_Email-R_Mot-De-Passe/Mot-De-Passe/new-password/new-password.component';

@NgModule({
  declarations: [
    ConnexionComponent,
    InscriptionEnseignantComponent,
    InscriptionEtudiantComponent,
    MainInscriptionComponent,
    VerificationEmailComponent,
    ResetPasswordComponent,
    NewPasswordComponent

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
