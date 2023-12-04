import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerificationEmailService } from '../../../Email/Service/verification-email.service';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';

@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.scss']
})
export class VerificationEmailComponent implements OnInit {
  
  cle : ""

  constructor(private Ge_cle:ActivatedRoute , private _Service : ServiceAuthentificationService){
    this._Service.VerificationEmail(this.cle);
  }

  ngOnInit(): void {
    this.Ge_cle.params.subscribe((e)=>{
      this.cle = e.id;
      console.log(this.cle)
    })
    
    this._Service.VerificationEmail(this.cle).subscribe();
    console.log(this._Service.VerificationEmail(this.cle))
  }

}
