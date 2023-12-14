import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionEtudiantComponent } from '../Inscription/inscription-etudiant/inscription-etudiant.component';
import { InscriptionEnseignantComponent } from '../Inscription/inscription-enseignant/inscription-enseignant.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { MainEnseignantComponent } from 'src/app/Espace-Enseignant/main-enseignant/main-enseignant.component';
import { MainEtudiantComponent } from 'src/app/Espace-Etudiant/main-etudiant/main-etudiant.component';
import { VerificationEmailComponent } from '../V_Email-R_Mot-De-Passe/verification-email/verification-email.component';
import { ResetPasswordComponent } from '../V_Email-R_Mot-De-Passe/Mot-De-Passe/reset-password/reset-password.component';
import { NewPasswordComponent } from '../V_Email-R_Mot-De-Passe/Mot-De-Passe/new-password/new-password.component';
const routes: Routes = [
  { path: "", component: ConnexionComponent } ,
    { path: "InscriptionEtudiant", component: InscriptionEtudiantComponent },
    { path: "InscriptionEnseignant", component: InscriptionEnseignantComponent },
   
  { path: "Enseignant", component: MainEnseignantComponent },
  { path: "Etudiant", component: MainEtudiantComponent },
  { path: "PasswordReset", component: ResetPasswordComponent },
    { path: "NewPassword/:id", component: NewPasswordComponent },
    { path: "VerificationEmail/:id", component: VerificationEmailComponent }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAuthentificationRoutingModule { }
