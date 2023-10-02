import React, { useState } from "react";

const CodeBlock = ({ code, queryParams }) => {
    const generateQueryParams = () => {
      if (!queryParams || !Array.isArray(queryParams) || queryParams.length === 0) {
        return '';
      }
  
      const queryParamsStr = queryParams
        .map((param) => {
          if (typeof param === 'object' && param.name && param.value) {
            return param.value;
          } else if (typeof param === 'string') {
            return param;
          }
          return '';
        })
        .join(' ');
  
      return queryParamsStr;
    };
  
    const commandWithParams = `${code} ${generateQueryParams()}`;
  
    return (
        <pre>
        <code>{generateQueryParams()}</code>
        </pre>
    );
  };
  
  export default CodeBlock;
