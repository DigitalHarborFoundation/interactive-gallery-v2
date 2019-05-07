module.exports = {
  siteMetadata: {
    title: `Digital Harbor Foundation Interactive Project Gallery`,
    description: `This is an interactive project gallery for the projects created during Digital Harbor Foundation's youth programs.`,
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
        name: `Digital Harbor Foundation Interactive Gallery`,
        short_name: `pi-portal-v1`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#0091c9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
  ],
};
