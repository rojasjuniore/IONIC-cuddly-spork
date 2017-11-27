import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

const identifier = 'token';
@Injectable()
export class Authetication {


    public token: string;

    constructor(private afAuth: AngularFireAuth) {
        this.setUp();
    }

    public createUserWithEmailAndPassword(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    public socialLogin(idProvide: string, ) {

        let provider;
        switch (idProvide) {
            case 'google':
                provider = new firebase.auth.GoogleAuthProvider();
                break;

            case 'facebook':
                provider = new firebase.auth.FacebookAuthProvider();
                break;
            case 'twitter':
                provider = new firebase.auth.TwitterAuthProvider();

                break;
            case 'github':
                provider = new firebase.auth.GithubAuthProvider();
                break;
            default:
                break;
        }

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result => {
                const credential = result.credential;
                const user_social = result.user;
                localStorage.setItem('usuario', JSON.stringify(result));

            })).catch((error) => {
                console.log(error)
            });
    }

    setUp() {
        this.token = this.getTokenFromLS();
        console.log(this.token)
        this.afAuth.authState.
            subscribe((data) => {
                if (data) {
                    localStorage.setItem(identifier, data.uid);
                    this.token = data.uid;
                } else {
                    localStorage.removeItem(identifier);
                    this.token = null;
                }
            });
    }

    getTokenFromLS(): string {
        return localStorage.getItem(identifier);
    }

    logOut() {
        return this.afAuth.auth.signOut().then(() => {
            this.token = null;
        });
    }

    /*createUserWithGoogle() {
        let provider = new firebase.auth.GoogleAuthProvider();
        return this.afAuth
            .auth.
            signInWithRedirect(provider)
            .then((result) => {
                return firebase.auth().getRedirectResult;
            });
    }

    createUserWithFacebook() {
        let provider = new firebase.auth.FacebookAuthProvider();
        return this.afAuth
            .auth.
            signInWithRedirect(provider)
            .then((result) => {
                return firebase.auth().getRedirectResult;
            });
    }*/



}