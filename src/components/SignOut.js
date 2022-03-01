import React from 'react';
import {auth} from '../firebase';
import { Button } from '@mui/material';

function SignOut() {
  return (
    <div>
      {/* firebaseのauthにsignOut()関数をつけるだけでsign outできる仕組み */}
      <Button onClick={() => auth.signOut()}>
        Sign Out
      </Button>
    </div>
  )
}

export default SignOut
