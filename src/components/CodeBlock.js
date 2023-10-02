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
          }
          return '';
        })
        .join(' ');
  
      return queryParamsStr ? `${code} ${queryParamsStr}` : code;
    };
  
    return (
      <>{`\`\`\`shell\n\n${generateQueryParams()}\n\n\`\`\``}</>
    );
  };
  
  export default CodeBlock;