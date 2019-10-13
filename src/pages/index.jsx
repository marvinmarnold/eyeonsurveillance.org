import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
    renderHero() {
        return (
  <main id="content" role="main">
                {/* ========== MAIN CONTENT ========== */}

    {/* Hero Section */}
    <div className="container position-relative z-index-4 space-2 space-top-md-4 space-top-lg-3 space-bottom-lg-3">
      <div className="row justify-content-lg-between align-items-lg-center">
        <div className="col-md-10 col-lg-7 mb-9 mb-lg-0">
          <div className="mb-7">
            <h1 className="display-4 font-size-md-down-5 font-weight-semi-bold mb-4">Eye on Surveillance</h1>
            <p className="lead font-weight-normal">Keeping an eye on surveillance in New Orleans.</p>
          </div>

            <button type="button" className="btn btn-success mr-5">Facial Recognition Ban</button>
            <button type="button" className="btn btn-primary">About EOS</button>
        </div>

        <div className="col-lg-5">
          <img className="img-fluid" src="eos-logo.svg" alt="Eye on Surveillance" />

        </div>
      </div>
    </div>
    {/* End Hero Section */}
    </main>
            )
    }
  render() {
    return (
      <Layout>
        <SEO title="Home" />

        {this.renderHero()}
      
      </Layout>
    )
  }
}

export default IndexPage
