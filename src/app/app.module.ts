import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Fire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

//FormsModule
import { FormsModule } from '@angular/forms';


// Firebase Creds

var firebaseConfig = {
    apiKey: "AIzaSyD75l61-_V5NPmhEzWG9VMKGMvX8evc_18",
    authDomain: "firestore-6eaaa.firebaseapp.com",
    databaseURL: "https://firestore-6eaaa.firebaseio.com",
    projectId: "firestore-6eaaa",
    storageBucket: "firestore-6eaaa.appspot.com",
    messagingSenderId: "91352741196"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
