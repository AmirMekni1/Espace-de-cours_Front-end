import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterUnMatieresComponent } from '../ajouter-un-matieres/ajouter-un-matieres.component';
import { ServiceEspaceEnseignantService } from 'src/app/Espace-Enseignant/Service/service-espace-enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-les-matieres',
  templateUrl: './afficher-les-matieres.component.html',
  styleUrls: ['./afficher-les-matieres.component.scss']
})
export class AfficherLesMatieresComponent implements OnInit {
  ArrayMatiere: any[]
  name: string;
  color: string;
  Email: any
  
  constructor(public dialog: MatDialog, private _service: ServiceEspaceEnseignantService,private route : Router) { }
  ngOnInit(): void {
    let Data = this._service.GetDataProfile()
    this.Email = Data.Email
    this._service.GetMatiere(Data.Email,localStorage.getItem("token")).subscribe((dat) => {
      this.ArrayMatiere = dat as any;

    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AjouterUnMatieresComponent, {
      width: '30%',
      data: { name: this.name, color: this.color },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.color = res;
    });
  }
  

  Delete(x:any){
    this._service.DeleteeMatiere(this.Email,x).subscribe(()=>{
      alert("Matiere Est Supprimer")
      
    },(err)=>{
      alert(err)
    })
  }

  router

}

