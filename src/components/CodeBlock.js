import React, { useState } from "react";

const CodeBlock = ({ code, queryParams }) => {
    const generateQueryParams = () => {
      if (!queryParams || !Array.isArray(queryParams) || queryParams.length === 0) {
        return '';
      }
  
      const queryParamsStr = queryParams
        .map((param) => {
          if (typeof param === 'object' && param.name && param.defaultValue) {
            return param.defaultValue;
          } else if (typeof param === 'string') {
            return param;
          }
          return '';
        })
        .join(' ');
  
      return queryParamsStr ? `${code} ${queryParamsStr}` : code;
    };
  
    return (
        <pre>
        <code>{generateQueryParams()}</code>
        </pre>
    );
  };
  
  export default CodeBlock;