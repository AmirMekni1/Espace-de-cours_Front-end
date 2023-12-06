import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {

  constructor(private connexionBD: HttpClient,) { }

  //________________________________________________________________________________________

  IsUser() {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }


  //________________________________________________________________________________________

  urlET = ("http://localhost:3000/Etudiant");
  urlEN = ("http://localhost:3000/Enseignant");

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

  MotdePassoublieET(cle:any){
    return this.connexionBD.post(this.urlET+"/sendResetPassword",cle)
  }

  NoveauMotDePassET(cle:any,Mot_De_Pass:any){
    return this.connexionBD.post(this.urlET+"/NewPassword/"+cle,Mot_De_Pass)
  }

  //________________________________________________________________________________________

  MotDePassOublieEN(cle:any){
    return this.connexionBD.post(this.urlEN+"/sendResetPassword",cle)
  }

  NoveauMotDePassEN(cle:any,Mot_De_Pass:any){
    return this.connexionBD.post(this.urlET+"/NewPassword/"+cle,Mot_De_Pass)
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

  //________________________________________________________________________________________

  //________________________________________________________________________________________

}
