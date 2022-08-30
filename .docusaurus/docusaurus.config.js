/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Cirun.io",
  "tagline": "Create On-demand Self-Hosted Github Actions Runners on your Cloud!",
  "url": "https://cirun.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "staticDirectories": [
    "static"
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "plugins": [
    "docusaurus-plugin-sass",
    "/home/vishal/Desktop/cirun-docs/docs/node_modules/docusaurus-lunr-search/src/index.js"
  ],
  "customFields": {
    "copyright": "Copyright © 2022 Cirun.io, Built with Docusaurus.",
    "meta": {
      "title": "Cirun.io",
      "description": "Create On-demand Self-Hosted Github Actions Runners on your Cloud!",
      "keywords": [
        "Cirun",
        "Github Actions",
        "Cirun cloud",
        "Cloud Authentication"
      ]
    },
    "domain": "https://cirun.io",
    "githubOrgUrl": "https://github.com/AktechLabs",
    "githubUrl": "https://github.com/AktechLabs/cirun-docs"
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "routeBasePath": "/",
          "path": "docs",
          "admonitions": {
            "icons": "emoji"
          },
          "sidebarPath": "/home/vishal/Desktop/cirun-docs/docs/sidebars.js",
          "sidebarCollapsible": true
        },
        "blog": false,
        "theme": {
          "customCss": "/home/vishal/Desktop/cirun-docs/docs/src/scss/application.scss"
        }
      }
    ]
  ],
  "themeConfig": {
    "docs": {
      "sidebar": {
        "autoCollapseCategories": true,
        "hideable": true
      },
      "versionPersistence": "localStorage"
    },
    "colorMode": {
      "respectPrefersColorScheme": true,
      "defaultMode": "light",
      "disableSwitch": false
    },
    "navbar": {
      "title": "Cirun.io",
      "logo": {
        "alt": "Cirun Docs",
        "src": "img/logo.png"
      },
      "style": "dark",
      "hideOnScroll": false,
      "items": [
        {
          "label": "Blog",
          "position": "right",
          "to": "/Blog"
        },
        {
          "href": "https://github.com/AktechLabs/cirun-docs",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "Cirun GitHub repository"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Quickstart",
              "to": "/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "href": "https://twitter.com/CirunHQ"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/Blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/aktechlabs/cirun-docs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Cirun.io, Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "themes": [],
  "scripts": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};