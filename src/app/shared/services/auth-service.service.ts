import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('User authenticated');
        this.userData = user;
        this.storeUser(user);
        // this.getUser();
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
      } else {
        console.log('No user authenticated');
        this.userData = null;
        this.storeUser(null);
        this.getUser();
      }
    });
  }

  get isLoggedIn(): boolean {
    // const status = this.getUser()
    //   .then(result => (result !== null && result.emailVerified !== false) ? true : false);

    // return (user !== null && user.emailVerified !== false) ? true : false;
    return (this.userData !== null) ? true : false;
  }


  async storeUser(user: any) {
    await Storage.set({ key: 'user', value: JSON.stringify(user) });
  };

  async getUser() {
    const { value } = await Storage.get({ key: 'user' });
    return JSON.parse(value);
  };

  async removeUser() {
    this.userData = null;
    await Storage.remove({ key: 'user' });
  }

  //Sign in with email/password
  signIn(email, password) {
    console.log('Started Authentication Process');
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        // this.ngZone.run(() => {
        //   this.router.navigate(['dashboard']);
        // });
        // this.setUserData(result.user);
      }).catch((error) => {
        console.log(error);
        window.alert(error.message);
      });
  }

  setUserData = (user) => {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };

    return userRef.set(userData, {
      merge: true
    });
  };

  // getUserData = (user) => {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  // }

  signUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  forgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox');
      }).catch((error) => {
        window.alert(error);
      });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      this.removeUser();
      this.router.navigate(['sign-in']);
    });
  }


}
