import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

const identifier = 'token';
@Injectable()
export class AutheticationService {


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

        return this.afAuth.auth.
            signInWithRedirect(provider)
            .then((result) => {
                console.log('1: ', result.profile)
                console.log('2: ', result)
                console.log('3', JSON.stringify(result.profile))

                localStorage.setItem('usuario', JSON.stringify(result.profile));
                return firebase.auth().getRedirectResult;
            })

        /* firebase
             .auth()
             .signInWithPopup(provider)
             .then((result => {
                 // const credential = result.credential;
                 // onst user_social = result.user;
                 localStorage.setItem('usuario', JSON.stringify(result.user));
 
             })).catch((error) => {
                 console.log(error)
             });*/
    }

    setUp() {
        this.token = this.getTokenFromLS();
        // console.log(this.token)
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
        localStorage.clear();
        return this.afAuth.auth.signOut().then(() => {
            this.token = null;
        });
    }
}