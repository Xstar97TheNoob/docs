import React, { useEffect } from 'react';

function WindowsDNS() {
  useEffect(() => {
    // Get query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const domain = params.get('domain') || 'app.mydomain.tld';
    const ip = params.get('ip') || '10.0.0.123';

    // Use the 'domain' and 'ip' values to update DNS settings
    // You can perform any necessary actions here, e.g., making API requests

    console.log(`Custom DNS Configuration - Domain: ${domain}, IP: ${ip}`);
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
