module.exports = {
  siteMetadata: {
    title: 'Cinnecta',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `UA-93349937-2`,
        trackingId: `UA-126803223-1`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
