"use client";

import { useSelector } from "react-redux";
import styles from "../dashboardMessage.module.css";
import { ChatMessage } from "./ChatMessage";
import * as React from "react";

export function ChatBody() {
  const { profile, messages } = useSelector((state) => state.dashboardMessage);
  const ref = React.useRef();

  React.useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ref, profile]);

  return (
    <div className={`chat-body ${styles.chatBody}`}>
      <ul className="msg-history h-100 px-4 py-3">
        {messages?.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}

        <div ref={ref} />
      </ul>
    </div>
  );
}
