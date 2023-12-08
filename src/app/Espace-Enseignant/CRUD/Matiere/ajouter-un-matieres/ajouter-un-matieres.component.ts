import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
export interface ModalData {
  name: string;
  color: string;
}

@Component({
  selector: 'app-ajouter-un-matieres',
  templateUrl: './ajouter-un-matieres.component.html',
  styleUrls: ['./ajouter-un-matieres.component.scss']
})
export class AjouterUnMatieresComponent {

  constructor(
    public dialogRef: MatDialogRef<AjouterUnMatieresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}
  Matiere :""
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {}
}

