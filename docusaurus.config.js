// Note: type annotations allow type checking and IDEs autocompletion
// @ts-check

// https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// Adding reusable information
const githubOrgUrl = "https://github.com/AktechLabs";
const domain = "https://cirun.io";

// -----------------------------------------------------------------------------
// custom Fields for the project
const customFields = {
  copyright: `Copyright © ${new Date().getFullYear()} Cirun.io, Built with Docusaurus.`,
  meta: {
    title: "Cirun.io",
    description:
      "Create On-demand Self-Hosted Github Actions Runners on your Cloud!",
    keywords: [
      "Cirun",
      "Github Actions",
      "Cirun cloud",
      "Cloud Authentication",
    ],
  },
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}/cirun-docs`,
};

// -----------------------------------------------------------------------------
// Main site config
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: customFields.meta.title,
  tagline: customFields.meta.description,
  url: customFields.domain,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  staticDirectories: ["static"],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Plugings need installing first then add here
  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("docusaurus-lunr-search"),
  ],
  customFields: { ...customFields },

  // ---------------------------------------------------------------------------
  // Edit presets
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          path: "docs",
          admonitions: {
            icons: "emoji",
          },
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/scss/application.scss"),
        },
      }),
    ],
  ],

  // ---------------------------------------------------------------------------
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: customFields.meta.title,
        logo: {
          alt: "Cirun Docs",
          src: "img/logo.png",
        },
        style: "dark",
        hideOnScroll: false,
        items: [
          // right navbar items
          {
            label: "Blog",
            position: "right",
            to: "/Blog",
          },

          {
            href: customFields.githubUrl,
            position: "right",
            className: "header-github-link",
            "aria-label": "Cirun GitHub repository",
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "W8RUIV4PV4",

        // Public API key: it is safe to commit it
        apiKey: "f13161ec6d133b5101ac05c84596bf4a",

        indexName: "runners",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Quickstart",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/CirunHQ",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/Blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/aktechlabs/cirun-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cirun.io, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
