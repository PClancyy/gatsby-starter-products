var dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `PACHAWHITEAESTHETICS`,
    description: `PachaWhite online store`,
    author: `@CWTWEBDESIGN`,
  },
  plugins: [{
      "resolve": "gatsby-source-flotiq",
      "options": {
        "authToken": process.env.GATSBY_FLOTIQ_API_KEY,
        "forceReload": false,
        "includeTypes": ['product', '_media']
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OneShopper`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4DB58E`,
        theme_color: `#4DB58E`,
        display: `minimal-ui`,
        icon: `src/images/pachaLogoMain.jpg`,
      },
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true,
      },
    },
  ],
}

