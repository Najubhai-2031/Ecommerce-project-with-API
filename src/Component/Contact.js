import React from 'react';

function Contact(props) {
    return (
        <React.Fragment>

            {/* <!-- catg header banner section --> */}
            <section id="aa-catg-head-banner">
                <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>Contact</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Contact</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- / catg header banner section --> */}
            {/* <!-- start contact section --> */}
            <section id="aa-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-contact-area">
                                <div className="aa-contact-top">
                                    <h2>We are wating to assist you..</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quos.</p>
                                </div>
                                {/* <!-- contact map --> */}
                                <div className="aa-contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717427065!2d72.4396538903454!3d23.0204977727074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1663407959957!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
                                </div>
                                {/* <!-- Contact address --> */}
                                <div className="aa-contact-address">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="aa-contact-address-left">
                                                <form className="comments-form contact-form" action="">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input type="text" placeholder="Your Name" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input type="email" placeholder="Email" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input type="text" placeholder="Subject" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input type="text" placeholder="Company" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                                                    </div>
                                                    <button className="aa-secondary-btn">Send</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="aa-contact-address-right">
                                                <address>
                                                    <h4>DailyShop</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum modi dolor facilis! Nihil error, eius.</p>
                                                    <p><span className="fa fa-home"></span>Ahmedabad</p>
                                                    <p><span className="fa fa-phone"></span>+91 - 72260 56730</p>
                                                    <p><span className="fa fa-envelope"></span>Email: ahirnm266@gmail.com</p>
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Contact;