import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Authetication } from '../../services/authetication'
import { Uploader } from '../../services/uploader'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  files: any;

  constructor(public navCtrl: NavController,
    public auth: Authetication,
    public _uploader: Uploader
  ) {

  }

  fileChanges(event) {
    this.files = event.target.files;
  }

  submit() {
    if (this.files.length <= 0) return;
    this._uploader.uploadMultiple(this.files);
  }

}
