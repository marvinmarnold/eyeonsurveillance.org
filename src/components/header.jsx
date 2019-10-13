import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
      <header id="header" className="u-header u-header--abs-top-md u-header--bg-transparent u-header--show-hide-md"
              data-header-fix-moment="500"
              data-header-fix-effect="slide">
              {/* HEADER */}

        <div className="u-header__section">
          <div id="logoAndNav" className="container">
            {/* Nav */}
            <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
              {/* Logo */}
              <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="index.html" aria-label="EOS">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="46px" 
                height="46px" viewBox="0 0 46 46" xmlSpace="preserve" style={{"margin-bottom": 0}}>
                  <path fill="#3F7DE0" opacity=".65" d="M23,41L23,41c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18h11.3C38,5,41,8,41,11.7V23C41,32.9,32.9,41,23,41z"/>
                  <path className="fill-info" opacity=".5" d="M28,35.9L28,35.9c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18l11.3,0C43,0,46,3,46,6.6V18C46,27.9,38,35.9,28,35.9z"/>
                  <path className="fill-primary" opacity=".7" d="M18,46L18,46C8,46,0,38,0,28v0c0-9.9,8-18,18-18h11.3c3.7,0,6.6,3,6.6,6.6V28C35.9,38,27.9,46,18,46z"/>
                  <path className="fill-white" d="M17.4,34V18.3h10.2v2.9h-6.4v3.4h4.8v2.9h-4.8V34H17.4z"/>
                </svg>
                <span className="u-header__navbar-brand-text">EOS</span>
              </a>
              {/* End Logo */}

              {/* Responsive Toggle Button */}
              <button type="button" className="navbar-toggler btn u-hamburger"
                      aria-label="Toggle navigation"
                      aria-expanded="false"
                      aria-controls="navBar"
                      data-toggle="collapse"
                      data-target="#navBar">
                <span id="hamburgerTrigger" className="u-hamburger__box">
                  <span className="u-hamburger__inner"></span>
                </span>
              </button>
              {/* End Responsive Toggle Button */}

              {/* Navigation */}
              <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
                <ul className="js-scroll-nav navbar-nav align-items-md-center u-header__navbar-nav">
                  <li className="nav-item u-header__nav-item active">
                    <a className="nav-link u-header__nav-link" href="#homeSection">Home</a>
                  </li>
                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href="#pricingSection">Points of Unity</a>
                  </li>
                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href="#eventsSection">Facial Recognition Ban</a>
                  </li>
                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href="#hiringSection">Upcoming Events</a>
                  </li>
                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href="#contactsSection">Announcements</a>
                  </li>

                </ul>
              </div>
              {/* End Navigation */}
            </nav>
            {/* End Nav */}
          </div>
        </div>
      {/* ========== END HEADER ========== */}

      </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
