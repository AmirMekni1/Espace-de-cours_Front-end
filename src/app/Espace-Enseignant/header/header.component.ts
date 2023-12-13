import { Component } from '@angular/core';
import { ServiceEspaceEtudiantService } from 'src/app/Espace-Etudiant/service/service-espace-etudiant.service';
import { ServiceEspaceEnseignantService } from '../Service/service-espace-enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  

  constructor(private route : Router) {
  }

  logout() {
    localStorage.removeItem("token")
    this.route.navigate(["/"])
  }

}