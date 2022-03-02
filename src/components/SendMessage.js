import React, { useState } from "react";
import {db, auth} from '../firebase';
import firebase from 'firebase/compat/app';
import { Input } from "@mui/material";

// inputに入れたtextをuseState()の変数messageに入れ、それをfirestoreのdatabaseに保存していくという処理
function SendMessage() {
  const [message, setMessage] = useState("");
  function sendMessage(e) {
    e.preventDefault();

    // firebase.jsで準備したauthを使うのでimport
    // 以下にすることによって、current userのuidとphotoURLを取ってこれて、collection(line19以降)をdatabaseに保存できるようになる
    const {uid, photoURL} = auth.currentUser;

    // firebaseのコレクションを開始のところにどんどん追加していく
    // 追加するにはadd()
    db.collection("messages").add({
      // 何をadd()したいの？ = inputに入力した文字
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), //enter keyを押した時間が取得できる
    });

    setMessage("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div class="sendMsg">
          <Input
            placeholder="type message here"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
