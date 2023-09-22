import React from 'react';

import links from '@site/static/donations/links.json';

const DonationLinks = () => {
  return (
    <div>
      {links.map((link, index) => (
        <div className="donation-option" key={index}>
          <p><a href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a></p>
        </div>
      ))}
    </div>
  );
};

export default DonationLinks;
