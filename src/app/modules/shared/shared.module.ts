import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GeneralService } from './services/general.service';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { LocalStorageService } from './services/localstorage.service';
import { ChatService } from './services/chat.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  providers: [GeneralService, ChatService, UserService, AuthenticationService, LocalStorageService],
  exports: [NavbarComponent]
})
export class SharedModule { }
