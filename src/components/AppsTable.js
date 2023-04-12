import React, { useState, useEffect } from "react";
import SkeletonTable from './ChartsOverView/SkeletonTable.js';

const AppsTable = ({link, rows = 20}) => {
  const [data, setData] = useState({});
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(link);
        const json = await res.json();
        setData(json);
      }
      fetchData();
    }, []);
    
if (!data) return <SkeletonTable columns={['Icon', 'Name', 'Train', 'Description']} rows={rows} />;
return (
  <div>
      <p>{data.serverDescription}</p>
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Train</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.apps &&
            data.apps.map(app => (
              <tr key={app.name}>
                <td><img src={app.icon} alt={app.name} width="48" height="36" /></td>
                <td>
                  {app.name}
                  {app.instances > 1 && <sup>x{app.instances}</sup>}
                </td>
                <td>{app.train}</td>
                <td>{app.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <p>Currently Installed: {data.count}</p>
    </div>
 );
}

export default AppsTable;
