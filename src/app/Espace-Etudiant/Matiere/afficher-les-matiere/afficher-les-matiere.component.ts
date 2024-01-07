import { Component, OnInit } from '@angular/core';
import { RejoindreACoursComponent } from '../rejoindre-a-cours/rejoindre-a-cours.component';
import { ServiceEspaceEtudiantService } from '../../service/service-espace-etudiant.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-les-matiere',
  templateUrl: './afficher-les-matiere.component.html',
  styleUrls: ['./afficher-les-matiere.component.scss']
})
export class AfficherLesMatiereComponent implements OnInit {
  ArrayMatiere: any[] = [];
  name: string;
  color: string;
  Email: any

  constructor(public dialog: MatDialog, private _service: ServiceEspaceEtudiantService, private route: Router) { }
  ngOnInit(): void {
    this.getCurrentUrl()
    let Data = this._service.GetDataProfile()
    this.Email = Data.Email
    this._service.Matieres(Data.Email, localStorage.getItem("token")).subscribe((dat) => {
      this.ArrayMatiere = dat as any;

    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RejoindreACoursComponent, {
      width: '20%',
      data: { name: this.name, color: this.color },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.color = res;
    });
  }


  Quitter(x: any) {
    console.log(x)
    console.log(this.Email)
    const verifier = confirm("Veux-tu partir ?")
    if (verifier){
      this._service.QuitterMatiere(x,this.Email,localStorage.getItem("token")).subscribe(() => {
        location.reload()
        this.route.onSameUrlNavigation = "reload"
      }, (err) => {
       location.reload()
      })
    }
  }


  getCurrentUrl() {
    return this.route.url
  }

  setCle_Etudiant(o:any){
    localStorage.setItem("x",o)
  }
}

