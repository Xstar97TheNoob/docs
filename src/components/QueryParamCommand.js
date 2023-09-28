import React, { useState, useEffect } from "react";

function QueryParamCommand({ text, domain: defaultDomain = 'app.example.com', ip: defaultIp = '', queries }) {
  const [queryValues, setQueryValues] = useState([]);
  const [domain, setDomain] = useState(defaultDomain);
  const [ip, setIp] = useState(defaultIp);

  useEffect(() => {
    // Function to extract query parameter values
    const getQueryParamValues = () => {
      const updatedDomain = new URLSearchParams(window.location.search).get('domain');
      const updatedIp = new URLSearchParams(window.location.search).get('ip');
      if (updatedDomain !== null) {
        setDomain(updatedDomain);
      }
      if (updatedIp !== null) {
        setIp(updatedIp);
      }

      return queries.map((query) => {
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
  }, [queries]);

  // Remove empty values from queryValues
  const filteredQueryValues = queryValues.filter((value) => value !== '');

  // Create an array of values to include in the command
  const valuesToInclude = [text];
  if (domain !== defaultDomain) {
    valuesToInclude.push(domain);
  }
  if (ip !== defaultIp) {
    valuesToInclude.push(ip);
  }
  valuesToInclude.push(...filteredQueryValues);

  // Join the values with a space to form the command
  const command = valuesToInclude.join(' ');

  return (
    <div>
      <pre>
        <code className="language-shell">{command}</code>
      </pre>
    </div>
  );
}

export default QueryParamCommand;
