const path = require(`path`);
const { features } = require("process");

module.exports = {
  siteMetadata: {
    title: `Luís Lampreia`,
    description: `A place where you can get to know me.`,
    author: `Luís Sousa`,
    siteUrl: `https://www.luislampreia.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luís Sousa's Personal Website`,
        short_name: `Personal Website`,
        start_url: `/`,
        background_color: `#010120`,
        theme_color: `#010120`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
