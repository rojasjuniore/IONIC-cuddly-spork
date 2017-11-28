import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import "firebase/storage";

@Injectable()
export class Uploader {

    storeRef: firebase.storage.Reference;

    constructor() {
        this.storeRef = firebase.storage().ref();
    }

    upload(file) {
        let fileRef = this.storeRef.child(`/images/${file.name}`);
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
            // console.log(element)
            promise.push(this.upload(element));
        }
        return Promise.all(promise);
    }
}