import React from "react";

export default function RandomQuote({ quote, author }) {
  return (
    <blockquote>
      "{quote}"
      <footer>
        <cite>- {author}</cite>
      </footer>
    </blockquote>
  );
}
