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
        } else if (typeof param === 'object' && param.defaultValue) {
          return param.defaultValue;
        }
        return '';
      })
      .join(' ');

    return queryParamsStr ? `${queryParamsStr}` : '';
  };

  return (
    <>{`\`\`\`shell\n${code} ${generateQueryParams()}\n\`\`\``}</>
  );
};

export default CodeBlock;
