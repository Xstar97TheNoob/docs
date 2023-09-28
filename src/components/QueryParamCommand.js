import React from 'react';

function QueryParamCommand({ text, defaults = {}, allowBlankIp = false, queries }) {
  const queryValues = queries.map((query) => {
    const param = new URLSearchParams(window.location.search).get(query);
    if (param !== null && param !== undefined) {
      return `${query} ${param}`;
    } else if (query === 'ip' && allowBlankIp) {
      return ''; // Leave IP blank if allowed
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
