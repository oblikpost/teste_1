// Em src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
 import { getAuth, provideAuth } from '@angular/fire/auth'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ 
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
    
  ],
  providers: [ 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
    
    provideFirebaseApp(() => initializeApp(environment)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()) 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}