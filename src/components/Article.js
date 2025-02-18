import React from "react";

function Article({ title, date, preview }) {
  // Format the date if provided, otherwise use default
  const formattedDate = date
    ? new Date(date).toLocaleDateString()
    : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
