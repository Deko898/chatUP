import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NetworkRoutingModule } from './network-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SuggestedFriendsComponent } from './components/suggested-friends/suggested-friends.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ChatComponent } from './components/chat/chat.component';
import { PostsComponent } from './components/posts/posts.component';
import { MessagesComponent } from './components/chat/messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NetworkRoutingModule
  ],
  declarations: [LayoutComponent, HomeComponent, ProfileComponent, SuggestedFriendsComponent, FriendsComponent, ChatComponent, PostsComponent, MessagesComponent]
})
export class NetworkModule { }
