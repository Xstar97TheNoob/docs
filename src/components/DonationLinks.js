import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import links from '@site/static/donations/links.json';

const DonationLinks = () => {
  const { colorMode } = useDocusaurusContext();
  const isDarkTheme = colorMode === 'dark';

  return (
    <div className={`donation-grid ${isDarkTheme ? 'dark-mode' : 'light-mode'}`}>
      {links.map((link, index) => (
        <div className="donation-option" key={index}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
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
        a {
          text-decoration: none;
          color: ${isDarkTheme ? '#fff' : '#333'};
        }

        .dark-mode {
          background-color: #333;
        }
        .dark-mode a {
          color: #fff;
        }

        .light-mode {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default DonationLinks;
