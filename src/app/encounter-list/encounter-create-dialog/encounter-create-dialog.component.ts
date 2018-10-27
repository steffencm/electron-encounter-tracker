import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name: string;
  summary: string;
}

@Component({
  selector: 'app-encounter-create-dialog',
  templateUrl: './encounter-create-dialog.component.html',
  styleUrls: ['./encounter-create-dialog.component.scss']
})
export class EncounterCreateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EncounterCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }


  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
