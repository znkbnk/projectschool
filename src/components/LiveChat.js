// LiveChat.js

import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LiveChatNavBar from "./LiveChatNavBar";
import ChatBox from "./ChatBox";
import LiveChatWelcome from "./LiveChatWelcome";
import Navbar from "./Navbar";

function LiveChat() {
  const [user] = useAuthState(auth);
  const [lastMessage, setLastMessage] = useState("");

  // Function to fetch and set the last message
  const fetchLastMessage = () => {
    // Replace this with your logic to fetch the last message
    // For demonstration purposes, setting a dummy message
    const dummyMessage = "This is the last message";
    setLastMessage(dummyMessage);
  };

  useEffect(() => {
    fetchLastMessage();
  }, []);

  return (
    <div id='livechat-container'>
      <Navbar />

      <div className='App'>
        <LiveChatNavBar lastMessage={lastMessage} />
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
