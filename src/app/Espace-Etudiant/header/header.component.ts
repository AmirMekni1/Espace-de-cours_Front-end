import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEspaceEtudiantService } from '../service/service-espace-etudiant.service';
import { MatDialog } from '@angular/material/dialog';
import { RechercheComponent } from 'src/app/Espace-Enseignant/recherche/recherche.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  

  image : any
  nom:any
  constructor(private route : Router,private _service: ServiceEspaceEtudiantService,public dialog: MatDialog) {
    let data = this._service.GetDataProfile();
   this.image = data.image
   this.nom = data.NomPrenom
  }

  logout() {
   const verif = confirm("Voulez-vous vous déconnecter ?")
   
   if (verif){
    localStorage.removeItem("token")
    this.route.navigate(["/"])
  }else{

  }
  }

  OpenDialog(): void {
    const dialogRef = this.dialog.open(RechercheComponent, {
      width: '30%',
      
    });
    
  }
  
  
  
  //__________________________________________________
  
  
}