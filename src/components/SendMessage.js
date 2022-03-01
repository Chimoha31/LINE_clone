import React, {useState} from "react";

// inputに入れたtextをuseState()の変数messageに入れ、それをfirestoreのdatabaseに保存していくという処理
function SendMessage() {
  const [message, setMessage] = useState();
  return (
    <div>
      <form>
        <div class="sendMsg">
          <input placeholder="type message here" type="text" />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
