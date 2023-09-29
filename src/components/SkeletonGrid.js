import React, { useState, useEffect } from "react";

const SkeletonGrid = ({ columns = 100, rows = 4, headers }) => {
    return (
      <div className="skeleton-grid">
        {headers && (
          <div className="skeleton-row header-row">
            {headers.map((header, i) => (
              <div className="skeleton-cell header-cell" key={i}>
                {header}
              </div>
            ))}
          </div>
        )}
        {Array.from({ length: rows }, (_, i) => (
          <div className="skeleton-row" key={i}>
            {Array.from({ length: columns }, (_, j) => (
              <div className="skeleton-cell" key={j} />
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default SkeletonGrid;