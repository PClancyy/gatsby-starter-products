import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
import pachaLogo from "../images/pachaLogoMain.jpg"



const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 align-self-center">
          <Link className="header-logo" to="/"><img src={pachaLogo} alt="Pacha White Logo"></img></Link>
        </div>
        <div className="col-sm-12 col-md-8 align-self-center">
          <nav>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <div className="header-cart">
              <Link className="Header__summary snipcart-summary snipcart-checkout" to="#">
                <i className="fas fa-shopping-bag"></i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>

  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
