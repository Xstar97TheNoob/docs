import React, { useState } from "react";

const CodeBlock = ({ code, queryParams }) => {
  const generateQueryParams = () => {
    if (!queryParams || !Array.isArray(queryParams) || queryParams.length === 0) {
      return code;
    }

    // Parse the URL query string into an object
    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryParamObject = {};

    for (const [key, value] of urlSearchParams.entries()) {
      queryParamObject[key] = value;
    }

    // Replace placeholders in the code with the actual query parameter values
    const replacedCode = code.replace(/{(\w+)}/g, (match, paramName) => {
      // Find the corresponding query parameter
      const queryParamValue = queryParamObject[paramName];

      // If the query parameter exists and has a value, use it; otherwise, keep the placeholder
      return queryParamValue !== undefined ? queryParamValue : match;
    });

    return replacedCode;
  };

  return (
    <pre>
      <code>{generateQueryParams()}</code>
    </pre>
  );
};

export default CodeBlock;
