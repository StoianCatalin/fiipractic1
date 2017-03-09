import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeniuComponent } from './meniu/meniu.component';
import { MyServiceService } from './my-service.service';
import { MateService } from './services/mate.service'

@NgModule({
  declarations: [
    AppComponent,
    MeniuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MyServiceService,
    MateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
