import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>
            <p>{node.name}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
