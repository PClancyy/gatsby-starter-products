import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="footer_inner">
                    <div className="container">
                        <div className="footer-widget footer-content">
                            <section id="nav_menu-8" className="widget widget_nav_menu">
                                <div className="menu-main-container">
                                    <div className="instagram-icon">
                                        <ul id="menu-main" className="menu">
                                            <a href="https://www.instagram.com/pachawhiteaesthetics.gla/?hl=en"><i className="fab fa-instagram"></i></a>
                                        </ul>
                                    </div>

                                </div>
                            </section>
                        </div>
                        <div className="footer-bottom social-right-menu ">
                            <div className="site-info">
                                ©2020 PachaWhiteAesthetics.GLA | All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
