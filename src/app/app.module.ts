import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBDLZXDBqe5LhtnhjieoQzTEWqhr_dmEA",
  authDomain: "abide-assignment.firebaseapp.com",
  databaseURL: "https://abide-assignment.firebaseio.com",
  projectId: "abide-assignment",
  storageBucket: "abide-assignment.appspot.com",
  messagingSenderId: "109996230141",
  appId: "1:109996230141:web:3831be2ed17ea5f0f1c594",
  measurementId: "G-J6LMEXVC6Q"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
