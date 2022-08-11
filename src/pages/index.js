import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEOLayer from '../components/SEOLayer';

const index = () => {
  return (
    <Layout pageTitle="My Gatsby Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="clifford.webp"
      />
    </Layout>
  );
};

export default index;

export const Head = () => <SEOLayer title="My Gatsby Page" />;
