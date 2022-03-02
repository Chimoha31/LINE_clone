import React from "react";
import { auth } from "../firebase";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

function SignOut() {
  return (
    <div className="header">
      {/* firebaseのauthにsignOut()関数をつけるだけでsign outできる仕組み */}
      <Button
        style={{ color: "white", fontSize: "15px" }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  );
}

export default SignOut;
