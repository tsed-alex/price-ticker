import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { RowUpdaterDirective } from './directives/row-updater.directive';

@NgModule({
  declarations: [
    AppComponent,
    RowUpdaterDirective
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
