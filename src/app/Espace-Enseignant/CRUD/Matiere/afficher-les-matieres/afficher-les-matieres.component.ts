import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterUnMatieresComponent } from '../ajouter-un-matieres/ajouter-un-matieres.component';

@Component({
  selector: 'app-afficher-les-matieres',
  templateUrl: './afficher-les-matieres.component.html',
  styleUrls: ['./afficher-les-matieres.component.scss']
})
export class AfficherLesMatieresComponent {
  name: string;
  color: string;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AjouterUnMatieresComponent, {
      width: '30%',
      data: { name: this.name, color: this.color },
    });
    dialogRef.afterClosed().subscribe((res) => {
      this.color = res;
    });
  }
}

