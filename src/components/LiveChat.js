import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LiveChatNavBar from "./LiveChatNavBar";
import ChatBox from "./ChatBox";
import LiveChatWelcome from "./LiveChatWelcome";
import Navbar from "./Navbar";
import { useEffect } from "react";

function LiveChat() {
  const [user] = useAuthState(auth);

useEffect(() => {
  const nav = document.querySelector(".nav-bar");

  const onScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
      nav.classList.add("scrolled-down");
    } else {
      nav.classList.remove("scrolled-down");
    }
  };

  document.addEventListener("scroll", onScroll);

  return () => {
    document.removeEventListener("scroll", onScroll);
  };
}, []);

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
