import React, { useEffect, useState } from 'react';

function WindowsDNS() {
  const [domain, setDomain] = useState(''); // Initialize domain state
  const [ip, setIp] = useState(''); // Initialize ip state

  useEffect(() => {
    // Get query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const queryDomain = params.get('domain') || 'app.example.com';
    const queryIp = params.get('ip') || '10.0.0.123';

    // Set the extracted values to state
    setDomain(queryDomain);
    setIp(queryIp);

    // You can perform any necessary actions here, e.g., making API requests

    console.log(`Custom DNS Configuration - Domain: ${queryDomain}, IP: ${queryIp}`);
  }, []);

  return (
    <div>
      <h1>Custom DNS Configuration</h1>
      <p>Domain: {domain}</p>
      <p>IP: {ip}</p>
    </div>
  );
}

export default WindowsDNS;
