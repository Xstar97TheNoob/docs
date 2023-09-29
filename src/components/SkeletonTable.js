import React, { useState, useEffect } from "react";

const SkeletonTable = ({ columns, rows = 100}) => {
    return (
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, i) => (
            <tr key={i}>
              {columns.map((_, j) => (
                <td key={j}>
                  <div style={{ width: '100px', height: '20px', background: '#E0E0E0', borderRadius: '3px' }} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={columns.length}>
              <div style={{ width: '100%', height: '20px', background: '#E0E0E0', borderRadius: '3px' }} />
            </td>
          </tr>
        </tfoot>
      </table>
    );
  };
  
  export default SkeletonTable;