import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './index.scss'

const Header = ({ siteTitle }) => (
    <header className="site-header">
        <div className="container">
            <div className="site-header__inner">
                <h1 className="site-header__title">
                    <Link to="/" className="site-header__title--link">
                        Stephen Hinett
                    </Link>
                </h1>
                <h3 className="site-header__subtitle">My personal blog</h3>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
