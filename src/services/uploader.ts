import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class Uploader {

    storeRef: firebase.storage.Reference;

    constructor() {
        this.storeRef = firebase.storage().ref();
    }

    upload(file) {
        let fileRef = this.storeRef.child('/');
        let uploadTask = fileRef.put(file);

        return new Promise((resolve, reject) => {
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {

                }, (error) => reject(error),
                () => {
                    let fileurl = uploadTask.snapshot.downloadURL
                    resolve(fileurl);
                })
        });


    }

    uploadMultiple(file) {
        let promise = [];
        for (let index = 0; index < file.length; index++) {
            const element = file[index];
            promise.push(this.upload(element));
        }

        return Promise.all(promise);
    }
}