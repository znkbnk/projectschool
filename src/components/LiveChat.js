import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LiveChatNavBar from "./LiveChatNavBar";
import ChatBox from "./ChatBox";
import LiveChatWelcome from "./LiveChatWelcome";
import Navbar from "./Navbar";

function LiveChat() {
  const [user] = useAuthState(auth);



  return (
    <div id="livechat-container">
      <Navbar />

      <div className='App'>
        <LiveChatNavBar />
        {!user ? (
          <LiveChatWelcome />
        ) : (
          <>
            <ChatBox />
          </>
        )}
      </div>
    </div>
  );
}

export default LiveChat;
