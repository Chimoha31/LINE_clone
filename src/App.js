import './App.css';
import SignIn from './components/SignIn';
import Line from './components/Line';
// 認証がどういう状態なのかをtrueかfalseで監視できるhooks↓(install必須)
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from './firebase';


function App() {
// あなたがログインしているのかしていないのか
const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Line /> :  <SignIn />}
    </div>
  );
}

export default App;
