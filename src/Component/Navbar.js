import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <React.Fragment>
          {/* <!-- menu --> */}
          <section id="menu">
                <div className="container">
                    <div className="menu-area">
                        {/* <!-- Navbar --> */}
                        <div className="navbar navbar-default" role="navigation">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse">
                                {/* <!-- Left nav --> */}
                                <ul className="nav navbar-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/Product">Products</Link></li>
                                    <li><Link to="/Blog">Blog <span className=""></span></Link></li>
                                    <li><Link to="/Contact">Contact</Link></li>
                                </ul>
                            </div>
                            {/* <!--/.nav-collapse --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- / menu --> */}
      </React.Fragment>
    );
}

export default Navbar;