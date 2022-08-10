import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

const index = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.webp"
      />
    </Layout>
  );
};

export default index;

// export const Head = () => <title>My custom title</title>;
