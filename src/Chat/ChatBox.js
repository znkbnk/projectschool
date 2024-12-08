import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../components/firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom immediately when the chat is opened (no smooth scrolling)
    scrollToBottom();

    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  useEffect(() => {
    // Scroll to the bottom whenever messages change, with no smooth scroll
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      // Directly scroll to the bottom without smooth scrolling
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <span ref={messagesEndRef}></span>
      </div>
      <SendMessage />
    </main>
  );
};

export default ChatBox;
