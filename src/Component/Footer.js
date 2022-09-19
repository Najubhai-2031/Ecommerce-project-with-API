import React from 'react';

function Footer(props) {
    return (
        <React.Fragment>
            {/* <!-- Subscribe section --> */}
            <section id="aa-subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-subscribe-area">
                                <h3>Subscribe our newsletter </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, velit!</p>
                                <form action="" className="aa-subscribe-form">
                                    <input type="email" name="" placeholder="Enter your Email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- / Subscribe section --> */}

            {/* <!-- footer -->   */}
            <footer id="aa-footer">
                {/* <!-- footer bottom --> */}
                <div className="aa-footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="aa-footer-top-area">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="aa-footer-widget">
                                                <h3>Main Menu</h3>
                                                <ul className="aa-footer-nav">
                                                    <li><a href="#">Home</a></li>
                                                    <li><a href="#">Our Services</a></li>
                                                    <li><a href="#">Our Products</a></li>
                                                    <li><a href="#">About Us</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="aa-footer-widget">
                                                <div className="aa-footer-widget">
                                                    <h3>Knowledge Base</h3>
                                                    <ul className="aa-footer-nav">
                                                        <li><a href="#">Delivery</a></li>
                                                        <li><a href="#">Returns</a></li>
                                                        <li><a href="#">Services</a></li>
                                                        <li><a href="#">Discount</a></li>
                                                        <li><a href="#">Special Offer</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="aa-footer-widget">
                                                <div className="aa-footer-widget">
                                                    <h3>Useful Links</h3>
                                                    <ul className="aa-footer-nav">
                                                        <li><a href="#">Site Map</a></li>
                                                        <li><a href="#">Search</a></li>
                                                        <li><a href="#">Advanced Search</a></li>
                                                        <li><a href="#">Suppliers</a></li>
                                                        <li><a href="#">FAQ</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="aa-footer-widget">
                                                <div className="aa-footer-widget">
                                                    <h3>Contact Us</h3>
                                                    <address>
                                                        <p> Ahmedabad</p>
                                                        <p><span className="fa fa-phone"></span>+91 72260 56730</p>
                                                        <p><span className="fa fa-envelope"></span>ahirnm266@gmail.com</p>
                                                    </address>
                                                    <div className="aa-footer-social">
                                                        <a href="#"><span className="fa fa-facebook"></span></a>
                                                        <a href="#"><span className="fa fa-twitter"></span></a>
                                                        <a href="#"><span className="fa fa-google-plus"></span></a>
                                                        <a href="#"><span className="fa fa-youtube"></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer-bottom --> */}
                <div className="aa-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="aa-footer-bottom-area">
                                    <p>Customized by <a href="https://www.linkedin.com/in/narin-bhadarka">Narin Ahir</a></p>
                                    <div className="aa-footer-payment">
                                        <span className="fa fa-cc-mastercard"></span>
                                        <span className="fa fa-cc-visa"></span>
                                        <span className="fa fa-paypal"></span>
                                        <span className="fa fa-cc-discover"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- / footer --> */}
        </React.Fragment>
    );
}

export default Footer;