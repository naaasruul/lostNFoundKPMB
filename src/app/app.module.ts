import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire/compat";
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';  

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCZlU7dQxwqd78mkUHduI-qtOS_XvDxlKA",
      authDomain: "lostandfoundkpmb-da5c1.firebaseapp.com",
      databaseURL: "https://lostandfoundkpmb-da5c1-default-rtdb.firebaseio.com",
      projectId: "lostandfoundkpmb-da5c1",
      storageBucket: "lostandfoundkpmb-da5c1.appspot.com",
      messagingSenderId: "621264328591"
    }),
    FirestoreModule,
    AngularFireStorageModule
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
