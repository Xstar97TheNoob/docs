import React from 'react';

import links from '@site/static/donations/links.json';

const DonationLinks = () => {
  return (
    <div className="donation-grid">
      {links.map((link, index) => (
        <div className="donation-option" key={index}>
          <a href={link.link} target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>
            {link.name}
          </a>
        </div>
      ))}
      <style jsx>{`
        .donation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }
        .donation-option {
          padding: 16px;
          border: 1px solid #ddd;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default DonationLinks;
