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
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll whenever messages change

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className='chat-box'>
      <div className='messages-wrapper'>
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
