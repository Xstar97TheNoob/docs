import React, { useState, useEffect } from "react";

function QueryParamCommand({ text, defaults = {}, queriesToReplace = [], queries }) {
  // Check if window is defined (i.e., in a browser context)
  const queryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();

  // Replace specified query parameters with their default values
  queriesToReplace.forEach((query) => {
    if (queryParams.has(query)) {
      queryParams.set(query, defaults[query] || '');
    }
  });

  const queryValues = queries.map((query) => {
    const param = queryParams.get(query);
    if (param !== null && param !== undefined) {
      return `${query} ${param}`;
    } else if (defaults[query] !== undefined) {
      return `${query} ${defaults[query]}`;
    } else {
      return '';
    }
  });

  const command = [text, ...queryValues].filter((value) => value !== '').join(' ');

  return (
    <div>
      <pre>
        <code className="language-shell">{command}</code>
      </pre>
    </div>
  );
}

export default QueryParamCommand;
