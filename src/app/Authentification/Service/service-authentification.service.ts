import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {

  constructor(private connexionBD : HttpClient) {  }

//_________________________________________________________________________________

url = ("http://localhost:3000/");

inscriptionEtudiant(objet:any){
 return this.connexionBD.post(this.url+"Etudiant/InscriptionEtudiant",objet);
}
//________________________________________________________________________________________
inscriptionEnseignant(objet:any){
  return this.connexionBD.post(this.url+"Enseignant/InscriptionEtudiant",objet);
 }



}
