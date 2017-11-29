import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { CameraPage } from '../pages/camera/camera';



import { SigUpPage } from '../pages/sig-up/sig-up';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// import { firebaseConfig } from '../environments/firebase-config';
import { AutheticationService } from '../services/authetication.service';
import { UploaderService } from '../services/uploader.service';
import { firebaseService } from '../services/firebase.service';

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
    ProfilePage,
    SigUpPage,
    BarcodeScannerPage,
    CameraPage
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
    ProfilePage,
    SigUpPage,
    BarcodeScannerPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AutheticationService,
    UploaderService,
    firebaseService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
