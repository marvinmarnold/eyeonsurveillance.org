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
                    <a className="nav-link u-header__nav-link" href="#pricingSection">Pricing</a>
                  </li>
                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href="#eventsSection">Events</a>
                  </li>
                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href="#hiringSection">Hiring</a>
                  </li>
                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href="#contactsSection">Contacts</a>
                  </li>

                  {/* Demos */}
                  <li className="nav-item hs-has-mega-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                      data-max-width="900px"
                      data-position="right">
                    <a id="demosMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Demos</a>

                    {/* Demos - Mega Menu */}
                    <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="demosMegaMenu">
                      <div className="row no-gutters">
                        <div className="col-lg-8">
                          <div className="u-header__promo-card-deck">
                            {/* Promo Item */}
                            <div className="u-header__promo-card u-header__promo-item">
                              <a className="u-header__promo-link" href="../app-marketplace/index.html">
                                <div className="media align-items-center">
                                  <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-45.svg" alt="SVG" />
                                  <div className="media-body">
                                    <span className="u-header__promo-title">App Marketplace <span className="badge badge-success badge-pill ml-1">New</span></span>
                                    <small className="u-header__promo-text">Marketplace app demo</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* End Promo Item */}

                            {/* Promo Item */}
                            <div className="u-header__promo-card u-header__promo-item">
                              <a className="u-header__promo-link" href="../house/index.html">
                                <div className="media align-items-center">
                                  <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-13.svg" alt="SVG" />
                                  <div className="media-body">
                                    <span className="u-header__promo-title">House</span>
                                    <small className="u-header__promo-text">Real estate demo</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* End Promo Item */}
                          </div>

                          <div className="u-header__promo-card-deck">
                            {/* Promo Item */}
                            <div className="u-header__promo-card u-header__promo-item">
                              <a className="u-header__promo-link" href="../job/index.html">
                                <div className="media align-items-center">
                                  <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-19.svg" alt="SVG" />
                                  <div className="media-body">
                                    <span className="u-header__promo-title">Job</span>
                                    <small className="u-header__promo-text">Job vacancy demo</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* End Promo Item */}

                            {/* Promo Item */}
                            <div className="u-header__promo-card u-header__promo-item">
                              <a className="u-header__promo-link" href="../help-desk/index.html">
                                <div className="media align-items-center">
                                  <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-4.svg" alt="SVG" />
                                  <div className="media-body">
                                    <span className="u-header__promo-title">Help Desk</span>
                                    <small className="u-header__promo-text">Help desk demo</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* End Promo Item */}
                          </div>

                          <div className="u-header__promo-card-deck">
                            {/* Promo Item */}
                            <div className="u-header__promo-card u-header__promo-item">
                              <a className="u-header__promo-link" href="../crypto/index.html">
                                <div className="media align-items-center">
                                  <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-5.svg" alt="SVG" />
                                  <div className="media-body">
                                    <span className="u-header__promo-title">Crypto Landing</span>
                                    <small className="u-header__promo-text">Cryptocurrency demo</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* End Promo Item */}

                            {/* Promo Item */}
                            <div className="u-header__promo-card u-header__promo-item">
                              <div className="u-header__promo-link">
                                <div className="media align-items-center">
                                  <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-23.svg" alt="SVG" />
                                  <div className="media-body">
                                    <span className="u-header__promo-title text-secondary">New demos</span>
                                    <small className="u-header__promo-text">coming soon ...</small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Promo Item */}
                          </div>
                        </div>

                        {/* Promo */}
                        <div className="col-lg-4 u-header__promo d-none d-lg-block">
                          <a className="d-block u-header__promo-inner" href="javascript:;">
                            <div className="position-relative">
                              <img className="img-fluid rounded mb-3" src="../../assets/img/380x227/img6.jpg" alt="Image Description" />
                            </div>
                            <span className="text-secondary font-size-1">Front makes you look at things from a different perspectives.</span>
                          </a>
                        </div>
                        {/* End Promo */}
                      </div>
                    </div>
                    {/* End Demos - Mega Menu */}
                  </li>
                  {/* End Demos */}

                  {/* Docs */}
                  <li className="nav-item hs-has-mega-menu u-header__nav-item"
                      data-event="hover"
                      data-animation-in="slideInUp"
                      data-animation-out="fadeOut"
                      data-max-width="260px"
                      data-position="right">
                    <a id="docsMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Docs</a>

                    {/* Docs - Submenu */}
                    <div className="hs-mega-menu u-header__sub-menu" aria-labelledby="docsMegaMenu" style={{"min-width": "330px"}}>
                      {/* Promo Item */}
                      <div className="u-header__promo-item">
                        <a className="u-header__promo-link" href="../../documentation/index.html">
                          <div className="media align-items-center">
                            <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-2.svg" alt="SVG" />
                            <div className="media-body">
                              <span className="u-header__promo-title">
                                Documentation
                                <span className="badge badge-primary badge-pill ml-1">v2.9</span>
                              </span>
                              <small className="u-header__promo-text">Development guides</small>
                            </div>
                          </div>
                        </a>
                      </div>
                      {/* End Promo Item */}

                      {/* Promo Item */}
                      <div className="u-header__promo-item">
                        <a className="u-header__promo-link" href="../../starter/index.html">
                          <div className="media align-items-center">
                            <img className="js-svg-injector u-header__promo-icon" src="../../assets/svg/icons/icon-1.svg" alt="SVG" />
                            <div className="media-body">
                              <span className="u-header__promo-title">Get started</span>
                              <small className="u-header__promo-text">Components and snippets</small>
                            </div>
                          </div>
                        </a>
                      </div>
                      {/* End Promo Item */}

                      <div className="u-header__promo-footer">
                        {/* List */}
                        <div className="row no-gutters">
                          <div className="col-6">
                            <div className="u-header__promo-footer-item">
                              <small className="text-muted d-block">Check what's new</small>
                              <a className="small" href="../../documentation/getting-started/changelog.html">
                                Changelog
                              </a>
                            </div>
                          </div>
                          <div className="col-6 u-header__promo-footer-ver-divider">
                            <div className="u-header__promo-footer-item">
                              <small className="text-muted d-block">Have a question?</small>
                              <a className="small" href="http://htmlstream.com/contact-us">
                                Contact us
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End List */}
                      </div>
                    </div>
                    {/* End Docs - Submenu */}
                  </li>
                  {/* End Docs */}

                  {/* Search */}
                  <li className="nav-item u-header__nav-last-item">
                    <a id="searchSlideDownInvoker" className="btn btn-xs btn-icon btn-text-secondary u-search-slide-down-trigger" href="javascript:;" role="button"
                       aria-haspopup="true"
                       aria-expanded="false"
                       aria-controls="searchSlideDown"
                       data-unfold-type="css-animation"
                       data-unfold-hide-on-scroll="false"
                       data-unfold-target="#searchSlideDown"
                       data-unfold-animation-in="active"
                       data-unfold-animation-out="fadeOutUp"
                       data-unfold-delay="0"
                       data-unfold-duration="800"
                       data-unfold-overlay='{
                        "className": "u-search-slide-down-bg-overlay",
                        "background": "rgba(30, 32, 34, .3)",
                        "animationSpeed": 400
                       }'>
                      <span className="fas fa-search btn-icon__inner u-search-slide-down-trigger__icon"></span>
                    </a>
                  </li>
                  {/* End Search */}
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
