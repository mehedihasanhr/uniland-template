"use client";

import * as React from "react";
import styles from "../dashboardMessage.module.css";

export default function ChatSearchBox() {
  const [search, setSearch] = React.useState("");

  return (
    <div className={`widget_search py-3 px-4 ${styles.widgetSearch}`}>
      <form
        role="search"
        method="get"
        className="search-form"
        action="http://localhost/axeman-wp/"
      >
        <label>
          <span className="screen-reader-text">Search for:</span>
          <input
            type="search"
            className="search-field"
            placeholder="Search …"
            name="s"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <input type="submit" className="search-submit" defaultValue="Search" />
      </form>
    </div>
  );
}
