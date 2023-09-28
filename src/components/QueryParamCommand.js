import React from 'react';

function QueryParamCommand({ text, defaults = {'domain': 'app.example.com'}, queriesToReplace = [], queries }) {
  const queryParams = new URLSearchParams(window.location.search);

  // Replace specified query parameters with their default values
  queriesToReplace.forEach((query) => {
    if (queryParams.has(query)) {
      queryParams.set(query, defaults[query] || '');
    }
  });

  const queryValues = queries.map((query) => {
    const param = queryParams.get(query);
    if (param !== null && param !== undefined) {
      return param; // Remove the query parameter name from the output
    } else if (defaults[query] !== undefined) {
      return defaults[query];
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
