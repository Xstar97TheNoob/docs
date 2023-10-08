import React, { useState, useEffect } from "react";
import jsonData from '/servers/servers.json';

const AppsTable = () => {
  const loadingViewMsg = "Loading server data...";
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [openTables, setOpenTables] = useState({}); // State to track open tables

  function replaceCharWithChar(inputString, oldChar, charToReplaceWith) {
    const regex = new RegExp(oldChar, 'g');
    const modifiedString = inputString.replace(regex, charToReplaceWith);
    return modifiedString;
  }

  useEffect(() => {
    if (!dataLoaded) {
      if (jsonData && jsonData.length > 0) {
        setData(jsonData);
        setIsLoading(false);
        setDataLoaded(true);
      }
    }
  }, [dataLoaded]);

  if (isLoading) {
    return <p>{loadingViewMsg}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No server data available. 😔</p>;
  }

  const toggleTable = (serverName) => {
    // Toggle the open state of the table for a given server
    setOpenTables((prevOpenTables) => ({
      ...prevOpenTables,
      [serverName]: !prevOpenTables[serverName],
    }));
  };

  return (
    <div>
      {data.map((server, index) => (
        <div key={index}>
          <br />
          <a href={`#${replaceCharWithChar(server.serverName, " ", "-")}`} id={replaceCharWithChar(server.serverName, " ", "-")}>
            <h2>{server.serverName}</h2>
          </a>
          <button onClick={() => toggleTable(server.serverName)}>
            {openTables[server.serverName] ? "Hide Table" : "Show Table"}
          </button>
          <hr />
          <div className={`table-container ${openTables[server.serverName] ? 'open' : 'closed'}`}>
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
                  server.apps.map((app) => (
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
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AppsTable;
