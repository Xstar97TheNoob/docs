// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Xstar's HomeLab",
  staticDirectories: ['static'],
  tagline: "The Noob's Guide for a HomeLab.",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.xstar97thenoob.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Xstar97TheNoob', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Xstar97TheNoob/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Xstar97TheNoob/docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/noob.svg',
      navbar: {
        title: "Xstar's HomeLab",
        logo: {
          alt: "Xstar's HomeLab Logo",
          src: 'img/noob.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://docs.xstar97thenoob.com/s/docs',
            label: 'GitHub',
            position: 'right',
          },{
            type: 'doc',
            docId: 'intro/index',
            position: 'left',
            label: 'Docs',
          },{
            type: 'doc',
            docId: 'platforms/scale/apps-and-services/my-apps-and-services',
            position: 'left',
            label: 'My Apps and Services',
          },
          {
            href: 'https://docs.xstar97thenoob.com/s/links',
            label: 'Links',
            position: 'left',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Links',
                href: 'https://docs.xstar97thenoob.com/s/links',
              },
              {
                label: 'Discord',
                href: 'https://docs.xstar97thenoob.com/s/discord',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://docs.xstar97thenoob.com/s/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Xstar97TheNoob.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
