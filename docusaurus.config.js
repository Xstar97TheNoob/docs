const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: "Xstar's HomeLab",
  staticDirectories: ['static'],
  tagline: "The Noob's Guide for a HomeLab.",
  url: 'https://docs.xstar97thenoob.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Xstar97TheNoob', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'docs/charts',
        blogTitle: 'Charts Feed',
        blogDescription: 'A curate list of Charts.',
        blogSidebarCount: 5,
        blogSidebarTitle: 'All our charts',
        routeBasePath: 'charts-feed',
        include: ['**/index.{md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        postsPerPage: 25,
        showReadingTime: false
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Xstar97TheNoob/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Xstar97TheNoob/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      sidebar: {
        autoCollapseCategories: true,
        hideable: true
      },
      navbar: {
        title: "Xstar's HomeLab",
        logo: {
          alt: "Xstar's HomeLab Logo",
          src: 'img/noob.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/charts-feed', label: 'Charts Feed', position: 'left'},
          {
            href: 'https://github.com/Xstar97TheNoob/docs',
            label: 'GitHub',
            position: 'right',
          },{
            type: 'doc',
            docId: 'intro/index',
            position: 'left',
            label: 'Docs',
          },{
            href: '/donations',
            label: 'Donations',
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
                href: 'https://links.xstar97thenoob.com',
              },
              {
                label: 'Discord',
                href: 'https://s.xstar97thenoob.com/discord',
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
                href: 'https://github.com/Xstar97TheNoob/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Xstar97TheNoob.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
