import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';

import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let firebaseConfig = {
  apiKey: "AIzaSyAXevdTMGV1uUxJ5Yx-TYjI8JM_YTYdz9w",
  authDomain: "scribe-48381.firebaseapp.com",
  databaseURL: "https://scribe-48381.firebaseio.com",
  projectId: "scribe-48381",
  storageBucket: "",
  messagingSenderId: "409146880399",
  appId: "1:409146880399:web:438515c354ec4c59"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
