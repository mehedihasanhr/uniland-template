"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../dashboardMessage.module.css";

export function ChatHeader() {
  const { profile } = useSelector((state) => state.dashboardMessage);

  if (!profile) return null;

  const activityClass =
    profile.active === "active"
      ? "bg-success"
      : profile.active === "offline"
      ? "bg-danger"
      : "bg-warning";

  return (
    <div
      className={`chatbox-head d-flex align-items-center bg-white ${styles.chatHeader}`}
    >
      <div
        className={`avata position-relative me-3 ${styles.chatBoxHeadAvatar}`}
      >
        <Image
          className="rounded-circle"
          src={profile?.avatar}
          alt={profile?.name}
          width={64}
          height={64}
        />
        <span className={`${activityClass} ${styles.userStatus}`} />
      </div>
      <div className={`chat-info pt-1 ${styles.chatInfo}`}>
        <span className={`d-block text-secondary ${styles.profileName}`}>
          {profile?.name}
        </span>
        <span className={`last-msg font-small ${styles.activityStatus}`}>
          {profile?.activityStatus}
        </span>
      </div>
    </div>
  );
}
