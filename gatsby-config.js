module.exports = {
  siteMetadata: {
    title: `Jeremy Crichton`,
    description: `I'm a software engineer based in Vancouver, Canada. I recently co-created Jade, an open-source framework that simplifies deploying and managing
    JAMstack applications on AWS cloud infrastructure.`,
    author: `Jeremy Crichton`,
    image: "/jeremy-crichton-circle.png",
    siteUrl: `https://jeremycrichton.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jeremycrichton.com`,
        short_name: `jeremycrichton.com`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
