import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

import { firebaseService } from '../../services/firebase.service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  data_user = {};
  img: string;;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _fs: firebaseService) {
  }

  ionViewDidLoad() {
    this.getProfile();
  }

  public getProfile() {
    const user: User = JSON.parse(localStorage.getItem('usuario'));
    console.log(user)
    if (user != null) {
      this.data_user = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        img: user.photoURL,
        addres: ''
      }
    }

    console.log(this.data_user)
  }

  logForm() {
    console.log(this.data_user);
  }

}

interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}