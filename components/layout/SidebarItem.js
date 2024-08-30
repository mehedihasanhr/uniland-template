"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

export function SidebarItem({
  href = "/",
  className,
  title,
  iconClass,
  segment,
  subMenus,
}) {
  const layoutSegment = useSelectedLayoutSegment();
  const [activeItem, setActiveItem] = React.useState("");

  React.useEffect(() => {
    if (layoutSegment && layoutSegment !== "__DEFAULT__") {
      setActiveItem(layoutSegment);
    } else {
      setActiveItem("__DEFAULT__");
    }
  }, [layoutSegment]);

  if (subMenus?.length > 0) {
    return (
      <li className="nav-item db-dropdown">
        <a className="nav-link dropdown-toggle" href="#">
          <i className="flaticon-home flat-mini pe-2" /> {title}
        </a>
        <ul className="db-dropdown-menu">
          {subMenus.map((item) => (
            <li key={item.id} className="nav-item">
              <Link className="nav-link" href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className={`nav-item ${activeItem === segment ? "active" : ""}`}>
      <Link href={href} className={`nav-link ${className}`}>
        {iconClass && <i className={`pe-2 ${iconClass}`} />}
        {title}
      </Link>
    </li>
  );
}
