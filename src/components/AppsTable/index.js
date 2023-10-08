import React, { useState, useEffect } from "react";
import jsonData from '/servers/servers.json';

const AppsTable = () => {
  const loadingViewMsg = "Loading server data...";
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false); // Track if data has been loaded

  function replaceCharWithChar(inputString, oldChar, charToReplaceWith) {
    const regex = new RegExp(oldChar, 'g');
    const modifiedString = inputString.replace(regex, charToReplaceWith);
    return modifiedString;
  }

  useEffect(() => {
    if (!dataLoaded) { // Check if data has not been loaded
      if (jsonData && jsonData.length > 0) {
        setData(jsonData);
        setIsLoading(false);
        setDataLoaded(true); // Set dataLoaded to true once data is loaded
      }
    }
  }, [dataLoaded]); // Trigger this effect only when dataLoaded changes

  if (isLoading) {
    // Render a loading view while data is being fetched
    return <p>{loadingViewMsg}</p>;
  }

  if (!data || data.length === 0) {
    // Handle the case when jsonData is empty or undefined
    return <p>No server data available. 😔</p>;
  }

  return (
    <div>
      {data.map((server, index) => (
        <div key={index}>
          <a href={`#${replaceCharWithChar(server.serverName, " ", "-")}`} id={replaceCharWithChar(server.serverName, " ", "-")}><h2>{server.serverName}</h2></a>
          <hr />
          <details open>
            <summary>{server.serverDescription}</summary>
            <br />
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
          </details>
        </div>
      ))}
    </div>
  );
}

export default AppsTable;
