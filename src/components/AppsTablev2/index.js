import React, { useState, useEffect } from "react";
import loadingViewSrc from '/img/loading-aesthetic.gif';
import LoadingView from './LoadingView.js';
import jsonData from '/servers/servers.json';

const AppsTablev2 = () => {
  const loadingViewMsg = "Loading server data...";
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (jsonData && jsonData.length > 0) {
      // Simulate loading delay for demonstration purposes
      setTimeout(() => {
        setData(jsonData);
        setIsLoading(false); // Set isLoading to false when data is ready
      }, 2000); // Adjust the delay time as needed
    }
  }, []);

  if (isLoading) {
    // Render a loading view while data is being fetched
    return <LoadingView src={loadingViewSrc} msg={loadingViewMsg} />
  }

  if (!data || data.length === 0) {
    // Handle the case when jsonData is empty or undefined
    return <p>No server data available. 😔</p>;
  }

  return (
    <div>
      {data.map((server, index) => (
        <div key={index}>
          <br />
          <a href={`#${server.serverName}`} id={server.serverName}><h2>{server.serverName}</h2></a><hr />
          <p>{server.serverDescription}</p>
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
              {server.apps &&
                server.apps.map(app => (
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
          <p>Currently Installed: {server.count}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AppsTablev2;
