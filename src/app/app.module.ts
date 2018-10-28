/*** MODULES ***/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './modules/shared/shared.module';
import { FlashMessagesModule, FlashMessagesService } from "angular2-flash-messages";


import { AppComponent } from './app.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    SharedModule,
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
