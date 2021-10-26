const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
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
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Tutorial",
            },
            { to: "/blog", label: "Blog", position: "left" },
            {
              href: "https://tecuntecs-cloud-platform.appspot.com/",
              label: "TecunTecs API Docs",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },
                {
                  label: "TecunTecs API Docs",
                  href: "https://tecuntecs-cloud-platform.appspot.com/",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} TecunTecs. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
