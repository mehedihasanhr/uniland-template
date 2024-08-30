"use client";

import React from "react";
import { ChatHeader } from "./ChatHeader";
import styles from "../dashboardMessage.module.css";
import { ChatBody } from "./ChatBody";
import { ChatBox } from "./ChatBox";
import { useSelector } from "react-redux";
import { EmptyChatMessage } from "./EmptyChatMessage";

export function ChatMessageContainer() {
  const { profile } = useSelector((s) => s.dashboardMessage);

  return (
    <div className="col-lg-7 col-xxl-8">
      <div
        className={`use-on-chat border bg-white rounded ${styles.activeChatContainer}`}
      >
        {profile ? (
          <>
            <ChatHeader />
            <ChatBody />
            <ChatBox />
          </>
        ) : (
          <EmptyChatMessage />
        )}
      </div>
    </div>
  );
}
