import { NgModule } from '@angular/core';
import { EncounterListComponent } from './encounter-list.component';
import { EncounterListItemComponent } from './encounter-list-item/encounter-list-item.component';
import { MaterialModule } from '../material.module';
import {CommonModule} from '@angular/common';
import { EncounterCreateDialogComponent } from './encounter-create-dialog/encounter-create-dialog.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
      EncounterListComponent,
      EncounterListItemComponent,
      EncounterCreateDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule,
    ],
    entryComponents: [
        EncounterCreateDialogComponent,
    ],
    exports: [
        EncounterListComponent,
    ],
    providers: [],
  })
  export class EncounterListModule { }
