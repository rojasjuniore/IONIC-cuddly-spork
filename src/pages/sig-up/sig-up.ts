import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authetication } from '../../services/authetication';


/**
 * Generated class for the SigUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sig-up',
  templateUrl: 'sig-up.html',
})
export class SigUpPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private auth: Authetication
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigUpPage');
  }

  createAccount() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password);
  }

  /*createUserWithGoogle() {
    this.auth.createUserWithGoogle();

  }

  createUserWithFacebook() {
    this.auth.createUserWithFacebook();
  }*/

  createuser(provider: string) {
    this.auth.socialLogin(provider);
  }

}
