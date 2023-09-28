import React from 'react';

function QueryParamCommand({ text, queryParams = {}, queries }) {
  const queryValues = queries.map((query) => {
    const param = queryParams[query] || '';
    return param ? `${query} ${param}` : '';
  });

  const command = [text, ...queryValues].join(' ');

  return (
    <div>
      <code>{command}</code>
    </div>
  );
}

export default QueryParamCommand;
