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
                        <div className="col-sm-12 col-md-4 align-self-center">
                        <h6>Established November 2020.</h6>
                        <p>Featuring all of your favourite PACHAWHITEAESTHETIC.GLA products.</p>
                         <p>New stock updated regularly.</p>
                         <p>Limited time deals ❤</p>
                        </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default About
