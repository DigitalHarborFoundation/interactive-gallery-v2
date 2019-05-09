// import { useStaticQuery, graphql } from 'gatsby';

// export const useSiteMetadata = () => {
//   const { site } = useStaticQuery(
//     graphql`
//       query SiteMetaData {
//         site {
//           siteMetadata {
//             title
//             author
//             description
//           }
//         }
//       }
//     `
//   );
//   return site.siteMetadata;
// };

// export const useFilterByCourse = () => {
//   const { filteredCourse } = useStaticQuery(
//     graphql`
//       query AsdfFilterByCourse {
//         Courses: allMarkdownRemark(
//           filter: { frontmatter: { course: { eq: "cs-core" } } }
//         ) {
//           edges {
//             node {
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   );
//   return filteredCourse.Courses.frontmatter;
// };
