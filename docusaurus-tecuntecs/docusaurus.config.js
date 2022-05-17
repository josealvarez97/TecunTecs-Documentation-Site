const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  themes: ["@docusaurus/theme-live-codeblock"],
  title: "TecunTecs",
  tagline: "Computational-Engineering-As-A-Service",
  url: "https://tecuntecs-cloud-platform.appspot.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/TecunTecs-Logo.png",
  organizationName: "TecunTecs", // Usually your GitHub org/user name.
  projectName: "tecuntecs-python-sdk", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/main/website/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: // I guess it would be cool to allow to edit this... like Microsoft does with their docs...
          // "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  // https://stackoverflow.com/questions/60783595/is-there-a-way-to-have-two-docs-in-docusaurus-2
  plugins: [
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "docs-industry",
    //     path: "docs-industry",
    //     routeBasePath: "docs-industry",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //     remarkPlugins: [math],
    //     rehypePlugins: [katex],
    //   },
    // ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-advanced",
        path: "docs-advanced",
        routeBasePath: "docs-advanced",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-cfdo",
        path: "docs-cfdo",
        routeBasePath: "docs-cfdo",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-concepts",
        path: "docs-concepts",
        routeBasePath: "docs-concepts",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "TecunTecs",
        logo: {
          alt: "TecunTecs-Logo",
          src: "img/TecunTecs-Logo.png",
        },
        items: [
          // {
          //   to: "/docs-advanced/intro",
          //   position: "left",
          //   label: "Advanced Solutions",
          //   activeBaseRegex: `/docs-advanced/`,
          // },

          // {
          //   to: "/docs-cfdo/intro",
          //   position: "left",
          //   label: "CFD Optimization",
          //   activeBaseRegex: `/docs-cfdo/`,
          // },
          {
            to: "/docs-concepts/intro",
            position: "left",
            label: "Learn Computational Engineering",
            activeBaseRegex: `/docs-concepts/`,
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Solutions by Application",
          },
          // {
          //   to: "/docs-industry/civil-engineering/beam-calculator",
          //   position: "left",
          //   label: "Solutions by Industry",
          //   activeBaseRegex: `/docs-industry/`,
          // },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://api.tecuntecs.com/api-docs/",
            label: "TecunTecs API Docs",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "TecunTecs API Docs",
                href: "https://api.tecuntecs.com/api-docs/",
              },
              {
                label: "YouTube",
                href:
                  "https://www.youtube.com/channel/UCOjtHla93JEzbELYEKEVCTw",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     // {
          //     //   label: "Blog",
          //     //   to: "/blog",
          //     // },
          //     {
          //       label: "TecunTecs API Docs",
          //       href: "https://tecuntecs-cloud-platform.appspot.com/",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TecunTecs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
