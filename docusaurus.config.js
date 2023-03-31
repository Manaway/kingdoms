// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "KingdomsX",
  tagline: "Dinosaurs are cool",
  url: "https://manaway.github.io",
  baseUrl: "/kingdoms",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  projectName: "kingdomstesting.github.io",
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "billing",
        path: "billing",
        routeBasePath: "billing",
        sidebarPath: require.resolve("./sidebarsbilling.js"),
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Panel",
        },
        {
          docId: "billing",
          position: "left",
          label: "Billing",
          to: "/billing/test",
        },
        {
          to: "/blog",
          label: "Anuncios",
          position: "left",
        },
        {
          href: "https://discord.gg/vD8drXYuxn",
          className: "header-discord-link header-discord-link",
          position: "right",
        },
      ],
    },
  },
};

module.exports = config;
