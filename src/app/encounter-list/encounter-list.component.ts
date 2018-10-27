import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { EncounterCreateDialogComponent } from './encounter-create-dialog/encounter-create-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-encounter-list',
  templateUrl: './encounter-list.component.html',
  styleUrls: ['./encounter-list.component.scss']
})
export class EncounterListComponent implements OnInit {

  encounters = [
    {
      name: 'First Encounter Inside Cave',
      summary: 'Fight some gerblins',
    },
    {
      name: 'Fight On The Bridge',
      summary: 'Fun fight with the flood',
    },
    {
      name: 'Boss Fight',
      summary: 'Big boss fight for fun!'
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.encounters, event.previousIndex, event.currentIndex);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EncounterCreateDialogComponent, {
      width: '400px',
      data: {
        name: '',
        summary: '',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.encounters.push(result);
    });
  }

}
