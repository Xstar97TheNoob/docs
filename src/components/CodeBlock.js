import React, { useState } from "react";

import { useLocation } from "react-router-dom";

const CodeBlock = ({ code, queryParams }) => {
    const generateQueryParams = () => {
      // Parse the URL query string into an object
      const location = useLocation();
      const urlSearchParams = new URLSearchParams(location.search);
      const queryParamObject = {};
  
      for (const [key, value] of urlSearchParams.entries()) {
        queryParamObject[key] = value;
      }
  
      // If there are no query parameters in the URL, use the default values from queryParams prop
      if (Object.keys(queryParamObject).length === 0) {
        const replacedCode = code.replace(/{(\w+)}/g, (match, paramName) => {
          const queryParam = queryParams.find(param => param.name === paramName);
          return queryParam ? queryParam.value : match;
        });
        return replacedCode;
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