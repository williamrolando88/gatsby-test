import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const seo = useStaticQuery(graphql`
    query {
      site {
        id
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);
  return seo.site.siteMetadata;
};
