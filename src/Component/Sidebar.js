import React from 'react';

function Sidebar(props) {
    return (
        <React.Fragment>
            <div className="col-lg-3 col-md-3 col-sm-4 col-md-pull-9">
                <aside className="aa-sidebar">
                    {/* <!-- single sidebar --> */}
                    <div className="aa-sidebar-widget">
                        <h3>Category</h3>
                        <ul className="aa-catg-nav">
                            <li><a href="#">Men</a></li>
                            <li><a href="">Women</a></li>
                            <li><a href="">Kids</a></li>
                            <li><a href="">Electornics</a></li>
                            <li><a href="">Sports</a></li>
                        </ul>
                    </div>
                    {/* <!-- single sidebar --> */}
                    <div className="aa-sidebar-widget">
                        <h3>Tags</h3>
                        <div className="tag-cloud">
                            <a href="#">Fashion</a>
                            <a href="#">Ecommerce</a>
                            <a href="#">Shop</a>
                            <a href="#">Hand Bag</a>
                            <a href="#">Laptop</a>
                            <a href="#">Head Phone</a>
                            <a href="#">Pen Drive</a>
                        </div>
                    </div>
                    {/* <!-- single sidebar --> */}
                    <div className="aa-sidebar-widget">
                        <h3>Shop By Price</h3>
                        {/* <!-- price range --> */}
                        <div className="aa-sidebar-price-range">
                            <form action="">
                                <div id="skipstep" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                                </div>
                                <span id="skip-value-lower" className="example-val">30.00</span>
                                <span id="skip-value-upper" className="example-val">100.00</span>
                                <button className="aa-filter-btn" type="submit">Filter</button>
                            </form>
                        </div>

                    </div>
                    {/* <!-- single sidebar --> */}
                    <div className="aa-sidebar-widget">
                        <h3>Shop By Color</h3>
                        <div className="aa-color-tag">
                            <a className="aa-color-green" href="#"></a>
                            <a className="aa-color-yellow" href="#"></a>
                            <a className="aa-color-pink" href="#"></a>
                            <a className="aa-color-purple" href="#"></a>
                            <a className="aa-color-blue" href="#"></a>
                            <a className="aa-color-orange" href="#"></a>
                            <a className="aa-color-gray" href="#"></a>
                            <a className="aa-color-black" href="#"></a>
                            <a className="aa-color-white" href="#"></a>
                            <a className="aa-color-cyan" href="#"></a>
                            <a className="aa-color-olive" href="#"></a>
                            <a className="aa-color-orchid" href="#"></a>
                        </div>
                    </div>
                    {/* <!-- single sidebar --> */}
                    <div className="aa-sidebar-widget">
                        <h3>Recently Views</h3>
                        <div className="aa-recently-views">
                            <ul>
                                <li>
                                    <a href="#" className="aa-cartbox-img"><img alt="img" src="img/woman-small-2.jpg" /></a>
                                    <div className="aa-cartbox-info">
                                        <h4><a href="#">Product Name</a></h4>
                                        <p>1 x $250</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="aa-cartbox-img"><img alt="img" src="img/woman-small-1.jpg" /></a>
                                    <div className="aa-cartbox-info">
                                        <h4><a href="#">Product Name</a></h4>
                                        <p>1 x $250</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="aa-cartbox-img"><img alt="img" src="img/woman-small-2.jpg" /></a>
                                    <div className="aa-cartbox-info">
                                        <h4><a href="#">Product Name</a></h4>
                                        <p>1 x $250</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- single sidebar --> */}
                    <div className="aa-sidebar-widget">
                        <h3>Top Rated Products</h3>
                        <div className="aa-recently-views">
                            <ul>
                                <li>
                                    <a href="#" className="aa-cartbox-img"><img alt="img" src="img/woman-small-2.jpg" /></a>
                                    <div className="aa-cartbox-info">
                                        <h4><a href="#">Product Name</a></h4>
                                        <p>1 x $250</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="aa-cartbox-img"><img alt="img" src="img/woman-small-1.jpg" /></a>
                                    <div className="aa-cartbox-info">
                                        <h4><a href="#">Product Name</a></h4>
                                        <p>1 x $250</p>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="aa-cartbox-img"><img alt="img" src="img/woman-small-2.jpg" /></a>
                                    <div className="aa-cartbox-info">
                                        <h4><a href="#">Product Name</a></h4>
                                        <p>1 x $250</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;