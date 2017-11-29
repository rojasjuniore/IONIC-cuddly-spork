import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import * as firebase from 'firebase/app';
import { firebaseConfig } from '../environments/firebase-config';
firebase.initializeApp(firebaseConfig);

firebase.auth().getRedirectResult()
    .then((result) => {
        console.log(result)
localStorage.setItem('usuario', JSON.stringify(result.user));
   });

platformBrowserDynamic().bootstrapModule(AppModule);
