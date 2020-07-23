/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const { Helmet } = require('react-helmet')

// You can delete this file if you're not using it
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    const headComponents = getHeadComponents()

    headComponents.sort((x, y) => {
        if (x.key === 'TypographyStyle') {
            return -1
        } else if (y.key === 'TypographyStyle') {
            return 1
        }
        return 0
    })

    replaceHeadComponents(headComponents)
}

exports.onRenderBody = (
    { setHeadComponents, setHtmlAttributes, setBodyAttributes },
    pluginOptions
) => {
    const helmet = Helmet.renderStatic()

    setHtmlAttributes(helmet.htmlAttributes.toComponent())
    setBodyAttributes(helmet.bodyAttributes.toComponent())
    setHeadComponents([
        helmet.title.toComponent(),
        helmet.link.toComponent(),
        helmet.meta.toComponent(),
        helmet.noscript.toComponent(),
        helmet.script.toComponent(),
        helmet.style.toComponent(),
    ])
}
