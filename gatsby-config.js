module.exports = {
  siteMetadata: {
    title: `Milos Mladenovic Portfolio`,
    description: `Personal Milos Mladenovic web development portfolio.`,
    author: `Milos Mladenovic`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Milos Mladenovic`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#F3F3F3`,
        theme_color: `#3B8BEA`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:'data',
        path:`${__dirname}/src/data/`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
