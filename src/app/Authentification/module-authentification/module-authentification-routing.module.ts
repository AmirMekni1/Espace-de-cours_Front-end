import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInscriptionComponent } from '../Inscription/main-inscription/main-inscription.component';
import { InscriptionEtudiantComponent } from '../Inscription/inscription-etudiant/inscription-etudiant.component';
import { InscriptionEnseignantComponent } from '../Inscription/inscription-enseignant/inscription-enseignant.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { MainEnseignantComponent } from 'src/app/Espace-Enseignant/main-enseignant/main-enseignant.component';
import { MainEtudiantComponent } from 'src/app/Espace-Etudiant/main-etudiant/main-etudiant.component';
import { MotDePasseOublierComponent } from '../V_Email-R_Mot-De-Passe/Mot-De-Passe/mot-de-passe-oublier/mot-de-passe-oublier.component';
import { VerificationEmailComponent } from '../V_Email-R_Mot-De-Passe/verification-email/verification-email.component';
import { NouvelleMotDePasseComponent } from '../V_Email-R_Mot-De-Passe/Mot-De-Passe/nouvelle-mot-de-passe/nouvelle-mot-de-passe.component';
const routes: Routes = [
  { path: "", component: ConnexionComponent },
  { path: "InscriptionEtudiant", component: InscriptionEtudiantComponent },
  { path: "InscriptionEnseignant", component: InscriptionEnseignantComponent },
  { path: "PageLogin", component: ConnexionComponent },
  { path: "Enseignant", component: MainEnseignantComponent },
  { path: "Etudiant", component: MainEtudiantComponent },
  { path: "PasswordReset", component: MotDePasseOublierComponent },
  { path: "NewPassword/:id", component: NouvelleMotDePasseComponent },
  { path: "VerificationEmail/:id", component: VerificationEmailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleAuthentificationRoutingModule { }
