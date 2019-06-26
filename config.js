const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://learn.hasura.io",
    gaTrackingId: null
  },
  header: {
    logo: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_white.svg",
    title: "agConnections Developer Documentation",
    githubUrl: "https://github.com/MKaufmanAg/agc-docs-site",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }]
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/codeblock", "/github-conventions"],
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
