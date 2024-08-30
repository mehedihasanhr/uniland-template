"use client";

import * as React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import styles from "../dashboardMessage.module.css";
import { openChat } from "@/lib/features/dashboardChatSlice";
import { startCase } from "@/lib/utils";
import { chatHistory } from "@/fake-data/messages";

export default function ChatItem(props) {
  const { messages, profile } = useSelector((state) => state.dashboardMessage);
  const dispatch = useDispatch(); // dispatch

  const { id, name, avatar, lastMessage, time, unseenMessage, active, isRead } =
    props;

  const statusMessage =
    active === "active"
      ? "text-success"
      : active === "offline"
      ? "text-danger"
      : "text-warning";

  // handle active chat
  const handleActiveChat = React.useCallback(() => {
    dispatch(
      openChat({
        messages: chatHistory,
        profile: {
          ...props,
          activityStatus:
            active === "idle" ? "Last seen 10 hours ago" : startCase(active),
        },
      })
    );
  }, [active, dispatch, props]);

  return (
    <li
      data-read={isRead}
      data-active={profile?.id === id}
      onClick={handleActiveChat}
      onKeyDown={handleActiveChat}
      className={`${styles.chatItem} ${isRead ? "" : "new-message"}`}
    >
      <div className="avata">
        <Image
          className="rounded-circle"
          src={avatar}
          alt="uniland template"
          width={80}
          height={80}
        />
        <span className={`user-status ${statusMessage}`}>
          <i className="fas fa-circle" />
        </span>
      </div>
      <div className="chat-info py-1">
        <span className="mb-1 d-block text-secondary">{name}</span>
        <div className="last-msg font-small">{lastMessage}</div>
      </div>
      <div className="chat-time ms-auto text-end">
        <div className="mb-1">{time}</div>
        <div className="un-read">{unseenMessage}</div>
      </div>
    </li>
  );
}
