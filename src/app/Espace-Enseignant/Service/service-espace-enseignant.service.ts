import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEspaceEnseignantService {

  constructor(private connexionBD: HttpClient,) { }

  urlEN = ("http://localhost:3000/Enseignant");
  urlMAT = ("http://localhost:3000/Matiere");
  urlCAL = ("http://localhost:3000/Classe");

  

  IsUser() {
    let tokenn = localStorage.getItem("token");
    if (tokenn) {
      return true;
    } else {
      return false;
    }
  }

  GetDataProfile(){
    let token = localStorage.getItem("token");
    let Data = JSON.parse(window.atob(token.split('.')[1]));
    return Data
  }
  
  ajouterMatiere(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.post(this.urlMAT+"/ajouterMatiere",o,{ headers })
  }

  GetMatiere(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.get(this.urlMAT+"/GetAllCardMatiere/"+o , { headers })
  }

  DeleteeMatiere(o:any,x:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.delete(this.urlMAT+"/deleteMatiere/"+o+"/"+x, { headers })
  }

  ajouterClasse(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.post(this.urlCAL+"/ajouterClasse",o,{ headers })
  }

  GetClasse(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.get(this.urlCAL+"/GetAllCardClasse/"+o , { headers })
  }

  DeleteeClasse(o:any,x:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.delete(this.urlCAL+"/deleteClasse/"+o+"/"+x, { headers })
  }
}
