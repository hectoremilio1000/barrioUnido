module.exports = {
  siteMetadata: {
    title: "barrioUnido",
  },
  plugins: [{
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: 'mybucketname.com',
      acl: null
    }}],
};
