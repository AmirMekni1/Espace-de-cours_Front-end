import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerificationEmailService {

  constructor(private connexionBD : HttpClient ) { }

  url = "http://localhost:3000/Etudiant/verifierEmail"

  VerificationEmail(cle:any){
    return this.connexionBD.post(this.url+"/"+cle,"")
  }
}
