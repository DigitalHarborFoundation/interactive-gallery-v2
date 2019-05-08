const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) =>
        createPage({
          path: `/courses/${node.frontmatter.course}/${node.frontmatter.slug}`,
          component: path.resolve(`./src/templates/entry-template.js`),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      );
    });
    resolve();
  });
};
