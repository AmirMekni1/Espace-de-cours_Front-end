import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceEspaceEtudiantService {
constructor(private connexionBD: HttpClient,) { }

urlET = ("http://localhost:3000/Etudiant");
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

AjouterMatiereEtudiant(o,id:any,token:any){
  const headers = new HttpHeaders({ Authorization: `${token}` });
 return this.connexionBD.post(this.urlET+"/AjouterMatiereEtudiant/"+id,{o}, { headers })
}

RecupererMatiereEtudiant(id:any,token:any): Observable<string[]>{
  const headers = new HttpHeaders({ Authorization: `${token}` });
 return this.connexionBD.get<string[]>(this.urlET+"/RecupererMatiereEtudiant/"+id, { headers })
}

MiseAjour(data,token:any): Observable<any>{
  const headers = new HttpHeaders({ Authorization: `${token}` });
  console.log(data)
 return this.connexionBD.put<any>(this.urlET+"/MiseAjourProfile",data,{headers})
}

GetAllMediasSociaux(id:any,token:any): Observable<any>{
  const headers = new HttpHeaders({ Authorization: `${token}` });
 return this.connexionBD.get<any>(this.urlET+"/GetAllMediasSociaux/"+id,{headers})
}

DataEt(id:any,token:any){
 const headers = new HttpHeaders({ Authorization: `${token}` });
 return this.connexionBD.get(this.urlET+"/Lister/"+id,{headers})
}

SupprimerMatiereEtudiant(id:any,M:String,token:any){
  const headers = new HttpHeaders({ Authorization: `${token}` });
  return this.connexionBD.delete(this.urlET+"/SupprimerMatiereEtudiant/"+id+"/"+M,{headers})
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
 
 RejoindreAuMatiere(id:any,Email:any,token:any): Observable<any>{
  const headers = new HttpHeaders({ Authorization: `${token}` });
  return this.connexionBD.post(this.urlET+"/RejoindreAuMatiere/"+id,{Email},{headers})
 }

 Matieres(o:any,token:any){
  const headers = new HttpHeaders({ Authorization: `${token}` });
  return this.connexionBD.get(this.urlET+"/GetAllCardMatiere/"+o , { headers })
}

QuitterMatiere(id:any,Email:any,token:any): Observable<any>{
  const headers = new HttpHeaders({ Authorization: `${token}` });
  return this.connexionBD.put(this.urlET+"/QuitterMatiere/"+id,{Email},{headers})
 }

 Matiere(o:any,token:any){
  const headers = new HttpHeaders({ Authorization: `${token}` });
  return this.connexionBD.get(this.urlET+"/GetCardMatiere/"+o , { headers })
}
}

