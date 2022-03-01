import React, {useState, useEffect} from 'react';
import SignOut from './SignOut';
import {db} from "../firebase";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // firestore databaseのコレクションから作成したコレクション名＝今回はmessages
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({id, text, photoURL, uid}) => (
          <div>
            <div key={id}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Line
