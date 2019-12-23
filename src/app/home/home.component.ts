import { Component, OnInit } from '@angular/core';

import { signInWithApple, isSignInWithAppleSupported, getSignInWithAppleState } from 'nativescript-apple-sign-in';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'apple-signin-project';
  user: string;
  email: string;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    this.getSignInState();
  }

  isSupported() {
      console.log(isSignInWithAppleSupported() ? 'YES' : 'NO');
  }

  getSignInState() {
      getSignInWithAppleState(this.user)
          .then(state => console.log('Sign in state: ' + state))
          .catch(err => console.log('Error getting sign in state: ' + err));
  }

  signIn(): void {
    console.log('Signin');
      signInWithApple(
          {
              scopes: ['EMAIL', 'FULLNAME']
          })
          .then(credential => {
              console.log('Signed in, user: ' + JSON.stringify(credential));
              this.user = credential.user;
          })
          .catch(err => console.log('Error signing in: ' + err));
  }
}
