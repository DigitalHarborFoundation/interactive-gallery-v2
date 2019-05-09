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
                youth
                title
                course
                semester
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node: entry }) =>
        createPage({
          path: `/courses/${entry.frontmatter.course}/${
            entry.frontmatter.semester
          }/${entry.frontmatter.youth}`,
          component: path.resolve(`./src/templates/entry-template.js`),
          context: {
            slug: entry.frontmatter.slug,
          },
        })
      );
    });
    resolve();
  });
};
