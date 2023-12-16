import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AjouterUnClasseComponent } from '../ajouter-un-classe/ajouter-un-classe.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceEspaceEnseignantService } from 'src/app/Espace-Enseignant/Service/service-espace-enseignant.service';

@Component({
  selector: 'app-afficher-les-classes',
  templateUrl: './afficher-les-classes.component.html',
  styleUrls: ['./afficher-les-classes.component.scss']
})
export class AfficherLesClassesComponent implements OnInit{

  ArrayClasse: any[]
  name: string;
  color: string;
  Email: any
  
  constructor(public dialog: MatDialog, private _service: ServiceEspaceEnseignantService,private route : Router) { }
  ngOnInit(): void {
    this.getCurrentUrl()
    let Data = this._service.GetDataProfile()
    this.Email = Data.Email
    this._service.GetClasse(Data.Email,localStorage.getItem("token")).subscribe((dat) => {
      this.ArrayClasse = dat as any;

    })
  }
  openDialog(): void {

    const dialogRef = this.dialog.open(AjouterUnClasseComponent, {
      width: '30%',
      data: { name: this.name, color: this.color },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.color = res;
    });
  }
  

  Delete(x:any){
    this._service.DeleteeClasse(this.Email,x,localStorage.getItem("token")).subscribe(()=>{
      alert("Matiere Est Supprimer")
      
    },(err)=>{
      alert(err)
    })
    window.location.reload()
  }

 
  getCurrentUrl() {
    return  this.route.url
  }

  
}
