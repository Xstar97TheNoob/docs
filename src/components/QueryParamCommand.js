import React, { useState, useEffect } from "react";

function QueryParamCommand({ text, domain = 'app.example.com', ip = '', queries }) {
  const [queryValues, setQueryValues] = useState([]);

  useEffect(() => {
    // Check if window object is available (running in the browser)
    if (typeof window !== "undefined") {
      const queryValues = queries.map((query) => {
        const param = new URLSearchParams(window.location.search).get(query) || '';
        return param ? `${query} ${param}` : '';
      });

      setQueryValues(queryValues);
    }
  }, [queries]);

  const command = [text, domain, ip, ...queryValues].join(' ');

  return (
    <div>
      <pre>
        <code className="language-shell">{command}</code>
      </pre>
    </div>
  );
}

export default QueryParamCommand;
