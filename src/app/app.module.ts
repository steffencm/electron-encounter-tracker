import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncounterListModule } from './encounter-list/encounter-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EncounterListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
