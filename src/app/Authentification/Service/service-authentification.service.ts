import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {

  constructor(private connexionBD : HttpClient) {  }

//_________________________________________________________________________________

url = ("http://localhost:4200/Etudiant/");

inscriptionEtudiant(objet:any){
 return this.connexionBD.post(this.url+"InscriptionEtudiant",objet);
}




}
