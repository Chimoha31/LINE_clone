import React from 'react';
import { Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase';


function SignIn() {
  // googleにどうやってログインしていくか
  const signInWithGoogle = () => {
    // firebaseaが用意してくれているgoogleに簡単にログインできる関数
    const provider = new firebase.auth.GoogleAuthProvider();
    // ログインできる画面がpop upしてログインできるようになる
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>
        Log in with Google
      </Button>
    </div>
  )
}

export default SignIn
