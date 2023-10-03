import React, { useState } from "react";

const CodeBlock = ({ code, queryParams }) => {
    const generateQueryParams = () => {
      // Parse the URL query string into an object
      const urlSearchParams = new URLSearchParams(window.location.search);
      const queryParamObject = {};
  
      for (const [key, value] of urlSearchParams.entries()) {
        queryParamObject[key] = value;
      }
  
      // Merge query parameters from the URL with the provided queryParams prop
      const mergedQueryParams = { ...queryParamObject, ...queryParams };
  
      // Replace placeholders in the code with the actual query parameter values
      const replacedCode = code.replace(/{(\w+)}/g, (match, paramName) => {
        // Find the corresponding query parameter
        const queryParamValue = mergedQueryParams[paramName];
  
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