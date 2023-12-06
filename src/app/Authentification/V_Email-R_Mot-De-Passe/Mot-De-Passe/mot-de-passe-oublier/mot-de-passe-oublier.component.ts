import { Component, OnInit } from '@angular/core';
import { ServiceAuthentificationService } from 'src/app/Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-mot-de-passe-oublier',
  templateUrl: './mot-de-passe-oublier.component.html',
  styleUrls: ['./mot-de-passe-oublier.component.scss']
})
export class MotDePasseOublierComponent implements OnInit {

  Email : ""

  constructor(private _service : ServiceAuthentificationService){
    
  }
  ngOnInit(): void {
    
  }

  ResetPassword(){
    this._service.MotdePassoublieET(this.Email).subscribe((res)=>{
      console.log(res)
      console.log("ok1")
    },()=>{
      this._service.MotDePassOublieEN(this.Email).subscribe((res)=>{
        console.log(res)
        console.log("ok1")
    })})}











}

