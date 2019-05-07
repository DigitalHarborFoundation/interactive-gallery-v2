module.exports = {
  siteMetadata: {
    title: `Digital Harbor Foundation Interactive Project Gallery`,
    description: `"This is an interactive project gallery for the youth projects during Digital Harbor Foundation's Fall 2018 semester.`,
    author: `@jonathanprozzi`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
  ],
};
