module.exports = {
  siteMetadata: {
    title: `Digital Harbor Foundation Interactive Project Gallery`,
    description: `This is an interactive project gallery for the projects created during Digital Harbor Foundation's youth programs.`,
    semester: `Spring 2019`,
    author: `@jonathanprozzi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingID: 'UA-41426299-11',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        modalProps: {
          shouldCloseOnOverlayClick: true,
          shouldCloseOnEsc: true,
          onRequestClose: {},
          style: {
            overlay: {
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              backgroundColor: `rgba(0, 0, 0, 0.75)`,
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `courses`,
        path: `${__dirname}/src/entries`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // Adjust based on determined max-width in the image container
              maxWidth: 600,
              quality: 100,
              wrapperStyle: `margin-left: 0px; margin-right: 0px;`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Digital Harbor Foundation Interactive Gallery`,
        short_name: `DHF Interactive Gallery`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#0091c9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
  ],
};
