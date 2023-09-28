import React, { useState, useEffect } from "react";

function QueryParamCommand({ text, domain: defaultDomain = 'app.example.com', ip: defaultIp = '', queries }) {
  const [queryValues, setQueryValues] = useState([]);
  const [domain, setDomain] = useState(defaultDomain);
  const [ip, setIp] = useState(defaultIp);

  useEffect(() => {
    // Function to extract query parameter values
    const getQueryParamValues = () => {
      const updatedDomain = new URLSearchParams(window.location.search).get('domain') || defaultDomain;
      const updatedIp = new URLSearchParams(window.location.search).get('ip') || defaultIp;
      setDomain(updatedDomain);
      setIp(updatedIp);

      return queries.map((query) => {
        if (query === 'domain' && updatedDomain === defaultDomain) {
          return '';
        }
        if (query === 'ip' && updatedIp === defaultIp) {
          return '';
        }
        const param = new URLSearchParams(window.location.search).get(query) || '';
        return param ? `${query} ${param}` : '';
      });
    };

    // Initial update of queryValues
    setQueryValues(getQueryParamValues());

    // Update queryValues whenever the query parameters change
    const handleQueryParamChange = () => {
      setQueryValues(getQueryParamValues());
    };

    window.addEventListener("popstate", handleQueryParamChange);

    return () => {
      window.removeEventListener("popstate", handleQueryParamChange);
    };
  }, [defaultDomain, defaultIp, queries]);

  // Remove empty values from queryValues
  const filteredQueryValues = queryValues.filter((value) => value !== '');

  const command = [text, domain, ip, ...filteredQueryValues].join(' ');

  return (
    <div>
      <pre>
        <code className="language-shell">{command}</code>
      </pre>
    </div>
  );
}

export default QueryParamCommand;
