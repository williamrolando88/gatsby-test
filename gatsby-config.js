module.exports = {
  siteMetadata: {
    title: 'Blackness in Full Bloom',
    siteUrl: `https://www.yourdomain.tld`,
    description:
      'A free brand-building program created and produced by creative studio Deutsch LA, Blackness in Full Bloom helps local Black-owned businesses blossom and reach new heights through world-class marketing expertise and resources.',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/`,
      },
      __key: 'blog',
    },
  ],
};
