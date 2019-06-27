const config = {
  gatsby: {
    pathPrefix: "/agc-docs-site",
    siteUrl: "https://mkaufmanag.github.io/agc-docs-site",
    gaTrackingId: null
  },
  header: {
    logo: "https://avatars2.githubusercontent.com/u/12531147?s=200&v=4",
    title: "agConnections Developer Documentation",
    githubUrl: "https://github.com/MKaufmanAg/agc-docs-site",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }]
  },
  sidebar: {
    forcedNavOrder: ["/introduction"],
    links: [{ text: "", link: "" }]
  },
  siteMetadata: {
    title: "Gatsby Gitbook Boilerplate | Hasura",
    description: "Documentation built with mdx. Powering learn.hasura.io ",
    ogImage: null,
    docsLocation:
      "https://github.com/MKaufmanAg/agc-docs-site/tree/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  }
};

module.exports = config;
