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

  url = ("http://localhost:3000/");

  inscriptionEtudiant(objet: any) {
    return this.connexionBD.post(this.url + "Etudiant/InscriptionEtudiant", objet);
  }

  //________________________________________________________________________________________

  inscriptionEnseignant(objet: any) {
    return this.connexionBD.post(this.url + "Enseignant/InscriptionEnseignant", objet);
  }

  //________________________________________________________________________________________

  connexionEt(objet: any) {
    return this.connexionBD.post(this.url + "Etudiant/SIGN", objet)
  }

  //________________________________________________________________________________________

  connexionEn(objet: any) {
    return this.connexionBD.post(this.url + "Enseignant/SIGN", objet)
  }


}
