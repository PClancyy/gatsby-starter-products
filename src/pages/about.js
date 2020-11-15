import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


class About extends React.Component {
    render() {
        return ( <Layout>
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
                <div className="site-About">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        <h6>Established Nov 2020.</h6>
                        <p>New stock added regularly.</p>
                        <p>All of your favourite Pacha White Products.</p>
                        <p>Limited time deals & vouchers for all of your desired services ❤</p>
                        </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default About
