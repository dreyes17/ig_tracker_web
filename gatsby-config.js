module.exports = {
  siteMetadata: {
    title: `IG Tracker App`,
    author: `Vacama Company`,
    siteUrl: `https://www.igtracker.app`,
  },
  //pathPrefix: "/ig_tracker_web",///ig_tracker_web para github pages y / para igtracker.app
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {     
        langKeyDefault: 'en',   
        useLangKeyLayout: true,
        langKeyForNull: 'en',
        prefixDefault: true,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        //icon: `src/assets/icon-transparent.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
