import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleEspaceEtudiantRoutingModule } from './module-espace-etudiant-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MainEtudiantComponent } from '../main-etudiant/main-etudiant.component';
import { ProfileComponent } from '../profile/profile.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AfficherLesDocumentComponent } from '../Document/afficher-les-document/afficher-les-document.component';
import { RejoindreACoursComponent } from '../Matiere/rejoindre-a-cours/rejoindre-a-cours.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AfficherLesMatiereComponent } from '../Matiere/afficher-les-matiere/afficher-les-matiere.component';
import { MiseAJourProfileComponent } from '../profile/mise-a-jour-profile/mise-a-jour-profile.component';
import { AjouterDocumentComponent } from '../Document/ajouter-document/ajouter-document.component';
import { ModifierSupprimerComponent } from '../Document/modifier-supprimer/modifier-supprimer.component';


@NgModule({
  declarations: [
    MainEtudiantComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AfficherLesMatiereComponent,
    AfficherLesDocumentComponent,
    RejoindreACoursComponent,
    MiseAJourProfileComponent,
    AjouterDocumentComponent,
    ModifierSupprimerComponent
  ],
  imports: [
    CommonModule,
    ModuleEspaceEtudiantRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
    NgbTooltipModule,
    

  ]
})
export class ModuleEspaceEtudiantModule { }
