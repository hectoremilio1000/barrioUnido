module.exports = {
  siteMetadata: {
    title: "barrioUnido",
  },
  plugins: [{
  resolve: `gatsby-plugin-s3`,
  options: {
    bucketName: 'barriounido91c230005bd44a3ab921930ad28f53f9161846-dev',
    acl: null
  }}],
};
