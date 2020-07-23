module.exports = {
    siteMetadata: {
        title: `Stephen Hinett`,
        description: `Stephen Hinett is a Software Engineer currently working with Go and GraphQL at Sky Betting and Gaming.`,
        author: `@stephenhinett`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                data: `@import "${__dirname}/src/scss/global";`,
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
