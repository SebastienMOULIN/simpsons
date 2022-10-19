import Quote from "./Quote";
import React from "react";

export default function QuoteList({ quoteList }) {
  return (
    <ul>
      {quoteList.map((quote) => (
        <Quote quote={quote.quote} />
      ))}
    </ul>
  );
}
