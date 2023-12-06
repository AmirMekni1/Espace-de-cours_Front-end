import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';

@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.scss']
})
export class VerificationEmailComponent implements OnInit {

  cle: ""

  constructor(private Ge_cle: ActivatedRoute, private _Service: ServiceAuthentificationService) {
  }

  ngOnInit(): void {
    this.Ge_cle.params.subscribe((e) => {
      this.cle = e.id;
      console.log(this.cle)
    })

    this._Service.VerificationEmailET(this.cle).subscribe(() => {
      console.log("ok")
    }, (err) => {
      console.log(err)
      this._Service.VerificationEmailEN(this.cle).subscribe(() => {
        console.log("ok")
      }, (err) => {
        console.log(err)
      })

    });

  }

}
