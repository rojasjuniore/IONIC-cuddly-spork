import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { SigUpPage } from '../pages/sig-up/sig-up';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import { firebaseConfig } from '../environments/firebase-config';
import { Authetication } from '../services/authetication';
import { Uploader } from '../services/uploader';

export const firebaseConfig = {
  apiKey: "AIzaSyDNws2Pa1m_UBrVhIw9F5mp7Pz7kOXw3Lg",
  authDomain: "ionic-firebase-a0136.firebaseapp.com",
  databaseURL: "https://ionic-firebase-a0136.firebaseio.com",
  projectId: "ionic-firebase-a0136",
  storageBucket: "ionic-firebase-a0136.appspot.com",
  messagingSenderId: "211293333108"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SigUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SigUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Authetication,
    Uploader,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
