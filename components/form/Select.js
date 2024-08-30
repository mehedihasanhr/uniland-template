import React from "react";

export function Option({ children, ...props }) {
  return <option {...props}>{children}</option>;
}

export function Select({ children, ...props }) {
  return <select {...props}>{children}</select>;
}
