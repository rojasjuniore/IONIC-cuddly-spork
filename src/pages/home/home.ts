import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AutheticationService } from '../../services/authetication.service'
import { UploaderService } from '../../services/uploader.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  files: any;

  constructor(public navCtrl: NavController,
    public auth: AutheticationService,
    public _uploader: UploaderService
  ) {

  }

  fileChanges(event) {
    this.files = event.target.files;
  }

  submit() {
    if (this.files.length <= 0) return;
    this._uploader.uploadMultiple(this.files);
    this.files = null;
  }

}
