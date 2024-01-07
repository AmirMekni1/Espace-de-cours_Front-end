import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEspaceEnseignantService {

  constructor(private connexionBD: HttpClient,) { }

  urlEN = ("http://localhost:3000/Enseignant");
  urlMAT = ("http://localhost:3000/Matiere");
  urlDOC = ("http://localhost:3000/Document");

  Variable_A :any

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

  DeleteeMatiere(x:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.delete(this.urlMAT+"/deleteMatiere/"+x, { headers })
  }

  AjouterMatiereEnseignant(o,id:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.post(this.urlEN+"/AjouterMatiereEnseignant/"+id,{o}, { headers })
  }

  RecupererMatiereEnseignant(id:any,token:any): Observable<string[]>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.get<string[]>(this.urlEN+"/RecupererMatiereEnseignant/"+id, { headers })
  }

  MiseAjour(data,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
    console.log(data)
   return this.connexionBD.put<any>(this.urlEN+"/MiseAjourProfile",data,{headers})
  }

  GetAllMediasSociaux(id:any,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.get<any>(this.urlEN+"/GetAllMediasSociaux/"+id,{headers})
  }

  DataEn(id:any,token:any){
   const headers = new HttpHeaders({ Authorization: `${token}` });
   return this.connexionBD.get(this.urlEN+"/Lister/"+id,{headers})
  }

  SupprimerMatiereEnseignant(id:any,M:String,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.delete(this.urlEN+"/SupprimerMatiereEnseignant/"+id+"/"+M,{headers})
   }

   AjouterDoucument(o:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.post(this.urlDOC+"/AjouterDoucument",o,{headers})
   }

   GetDocuments(cle:any,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.get<any>(this.urlDOC+"/Lister/"+cle,{headers})
   }

   Set_A(Variable_B : any){
    this.Variable_A = Variable_B
   }
   
   GetDocument(cle:any,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.get<any>(this.urlDOC+"/GetDocument/"+cle,{headers})
   }

   SupprimerDocument(id:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.delete(this.urlDOC+"/deleteDocument/"+id,{headers})
   }
   
   MiseAjourDocument(id:any,dat,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.put(this.urlDOC+"/MiseAjourDocument/"+id,dat,{headers})
   }
   
   AjouterCommentaireDansDoucument(id:any,commentaireData:any,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.post(this.urlDOC+"/AjouterCommentaireDansDoucument/"+id,commentaireData,{headers})
   }

   RecupereCommentaireDansDoucument(id:any,token:any): Observable<any>{
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.get(this.urlDOC+"/AjouterCommentaireDansDoucument/"+id,{headers})
   }

   SupprimerToutLesDocument(id:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.delete(this.urlDOC+"/deleteAllDocument/"+id,{headers})
   }

   private themeSubject = new BehaviorSubject<string>('light');
   theme$ = this.themeSubject.asObservable();
 
   setTheme(theme: string) {
     this.themeSubject.next(theme);
   }

   Etudiants(id:any,token:any){
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.connexionBD.get(this.urlMAT+"/Lister/"+id,{headers})
   }
}
