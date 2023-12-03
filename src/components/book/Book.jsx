/** @format */

import React from "react";

export default function Book({ title, author, cover, summary }) {
  return (
    <div className="one-book">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <img src={cover} alt="cover" />
      <p>{summary}</p>
    </div>
  );
}
