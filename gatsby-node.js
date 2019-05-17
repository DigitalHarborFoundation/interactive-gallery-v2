const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        Entries: allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                youth
                title
                course
                semester
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.Entries.edges.forEach(({ node: entry }) =>
        createPage({
          path: `/courses/${entry.frontmatter.course}/${
            entry.frontmatter.semester
          }/${entry.frontmatter.youth}`,
          component: path.resolve(`./src/templates/entry-template.js`),
          context: {
            id: entry.id,
            course: entry.course,
          },
        })
      );
    });
    resolve();
  });
};
