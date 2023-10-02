import React, { useState } from "react";

const CodeBlock = ({ code, queryParams }) => {
  const generateQueryParams = () => {
    if (!queryParams || !Array.isArray(queryParams) || queryParams.length === 0) {
      return code;
    }

    // Create an object to hold the values for each parameter
    const paramValues = {};

    // Iterate through the queryParams array and populate the paramValues object
    queryParams.forEach((param) => {
      if (param.name && param.value) {
        paramValues[param.name] = param.value;
      }
    });

    // Replace placeholders in the code with the actual parameter values
    const replacedCode = code.replace(/\{(\w+)\}/g, (match, paramName) => {
      return paramValues[paramName] || "";
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
