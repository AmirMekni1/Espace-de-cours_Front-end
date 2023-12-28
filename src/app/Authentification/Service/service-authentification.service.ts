import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {

  constructor(private connexionBD: HttpClient,) { }

  //________________________________________________________________________________________

  IsUser() {
    let tokenn = localStorage.getItem("token");
    if (tokenn) {
      return true;
    } else {
      return false;
    }
  }

   //________________________________________________________________________________________

   GetDataProfile(){
    let token = localStorage.getItem("token");
    let Data = JSON.parse(window.atob(token.split('.')[1]));
    return Data
  }

  //________________________________________________________________________________________

  urlET = ("http://localhost:3000/Etudiant");
  urlEN = ("http://localhost:3000/Enseignant");
  urlMAT = ("http://localhost:3000/Matiere");

  inscriptionEtudiant(objet: any) {
    return this.connexionBD.post(this.urlET + "/InscriptionEtudiant", objet);
  }

  //________________________________________________________________________________________

  inscriptionEnseignant(objet: any) {
    return this.connexionBD.post(this.urlEN + "/InscriptionEnseignant", objet);
  }

  //________________________________________________________________________________________

  connexionEt(objet: any) {
    return this.connexionBD.post(this.urlET +"/login",objet)
  }

  //________________________________________________________________________________________

  connexionEn(objet: any) {
    return this.connexionBD.post(this.urlEN + "/login", objet)
  }

  //________________________________________________________________________________________

  VerificationEmailET(cle:any){
    return this.connexionBD.post(this.urlET+"/verifierEmail/"+cle,"")
  }
  
  //________________________________________________________________________________________

  VerificationEmailEN(cle:any){
    return this.connexionBD.post(this.urlEN+"/verifierEmail/"+cle,"")
  }

  //________________________________________________________________________________________

  MotdePassoublieET(texte: string): Observable<any> {
    return this.connexionBD.post(this.urlET+ "/ResetPassword" ,{texte})
  }

  NoveauMotDePassET(cle:any,texte: string): Observable<any> {
    return this.connexionBD.post(this.urlET+"/NewPassword/"+cle,{texte})
  }

  //________________________________________________________________________________________

  MotDePassOublieEN(texte: string): Observable<any> {
    return this.connexionBD.post(this.urlEN+"/ResetPassword",{texte})
  }

  NoveauMotDePassEN(cle:any,PWD: string): Observable<any> {
    return this.connexionBD.post(this.urlEN+"/NewPassword/"+cle,{PWD})
  }
  //________________________________________________________________________________________

  EE(cle:any) {
    return this.connexionBD.post(this.urlEN+"/EE/"+cle,"")
  }

 
  //________________________________________________________________________________________

  envoyerToken(o:any){
    return this.connexionBD.post(this.urlMAT+"/VerifierToken",{o})
  }
  //________________________________________________________________________________________

  //________________________________________________________________________________________

  //________________________________________________________________________________________

  //________________________________________________________________________________________

  //________________________________________________________________________________________

  //________________________________________________________________________________________

  //________________________________________________________________________________________

  //________________________________________________________________________________________

  //________________________________________________________________________________________

  //________________________________________________________________________________________

  //________________________________________________________________________________________

}
