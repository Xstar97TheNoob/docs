import React, { useState } from "react";

const CodeBlock = ({ code, queryParams }) => {
    const generateQueryParams = () => {
      if (!queryParams || !Array.isArray(queryParams) || queryParams.length === 0) {
        return '';
      }
  
      const queryParamsStr = queryParams
        .map((param) => {
          if (typeof param === 'string') {
            return param;
          } else if (typeof param === 'object' && param.name && param.value) {
            return param.value;
          }
          return '';
        })
        .join(' ');
  
      return queryParamsStr ? `${queryParamsStr}` : '';
    };
  
    return (
      <>{`\`\`\`shell\n\n${code} ${generateQueryParams()}\n\n\`\`\``}</>
    );
  };
  
  export default CodeBlock;