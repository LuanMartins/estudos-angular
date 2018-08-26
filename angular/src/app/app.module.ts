import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormsModule importado para utilizar ngModel
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroisComponent } from './herois/herois.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroisComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule foi importado para se usado pela aplicação
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
