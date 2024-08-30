import React from "react";
import styles from "../dashboardMessage.module.css";

export function EmptyChatMessage() {
  return (
    <div className={styles.emptyChatMessage}>
      <div className={styles.emptyChatMessageContent}>
        <i className="flaticon-email" />
        <span> No data available. Please select a chat to view details.</span>
      </div>
    </div>
  );
}
