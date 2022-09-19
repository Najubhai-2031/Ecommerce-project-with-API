import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {

    const [user,setUser] = useState('')

    useEffect(() => {
      let getUser = localStorage.getItem('username')
      setUser(getUser)
    }, [user])
    
    return (
        <React.Fragment>
            <a className='scrollToTop' href='#'><i className='fa fa-chevron-up'></i></a>
            {/* <!-- Start header section --> */}
            <header id="aa-header">
                {/* <!-- start header top  --> */}
                <div className="aa-header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="aa-header-top-area">
                                    {/* <!-- start header top left --> */}
                                    <div className="aa-header-top-left">
                                        {/* <!-- start language --> */}
                                        <div className="aa-language">
                                            <div className="dropdown">
                                                <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    <img src="img/flag/english.jpg" alt="english flag" />ENGLISH
                                                    <span className="caret"></span>
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                    <li><a href="#"><img src="img/flag/french.jpg" alt="" />FRENCH</a></li>
                                                    <li><a href="#"><img src="img/flag/english.jpg" alt="" />ENGLISH</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- / language --> */}

                                        {/* <!-- start currency --> */}
                                        <div className="aa-currency">
                                            <div className="dropdown">
                                                <a className="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    <i className="fa fa-inr"></i>INR
                                                    <span className="caret"></span>
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                    <li><a href="#"><i className="fa fa-euro"></i>EURO</a></li>
                                                    <li><a href="#"><i className="fa fa-usd"></i>USD</a></li>
                                                    <li><a href="#"><i className="fa fa-jpy"></i>YEN</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- / currency --> */}
                                        {/* <!-- start cellphone --> */}
                                        <div className="cellphone hidden-xs">
                                            <p><span className="fa fa-phone"></span>+91-72260 56730</p>
                                        </div>
                                        {/* <!-- / cellphone --> */}
                                    </div>
                                    {/* <!-- / header top left --> */}
                                    <div className="aa-header-top-right">
                                        <ul className="aa-head-top-nav-right">
                                            <li><Link to="/singup">Sign up</Link></li>
                                            <li className="hidden-xs"><Link to="/WishList">Wishlist</Link></li>
                                            <li className="hidden-xs"><Link to="/Cart">My Cart</Link></li>
                                            <li className="hidden-xs"><Link to="/Checkout">Checkout</Link></li>
                                            <li className="hidden-xs"><Link to="/YourOrder">My Order</Link></li>
                                            {/* <li><a href="" data-toggle="modal" data-target="#login-modal">{user}</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- / header top  --> */}

                {/* <!-- start header bottom  --> */}
                <div className="aa-header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="aa-header-bottom-area">
                                    {/* <!-- logo  --> */}
                                    <div className="aa-logo">
                                        {/* <!-- Text based logo --> */}
                                        <Link to="/">
                                            <span className="fa fa-shopping-cart"></span>
                                            <p>Narin's<strong>Shop</strong> <span>Your Shopping Partner</span></p>
                                        </Link>
                                        {/* <!-- img based logo --> */}
                                        {/* <!-- <a href="index.html"><img src="img/logo.jpg" alt="logo img"></a> --> */}
                                    </div>
                                    {/* <!-- / logo  --> */}
                                    {/* <!-- cart box --> */}
                                    <div className="aa-cartbox">
                                        <Link className="aa-cart-link" to="/Cart">
                                            <span className="fa fa-shopping-basket"></span>
                                            <span className="aa-cart-title">SHOPPING CART</span>
                                            <span className="aa-cart-notify">2</span>
                                        </Link>
                                        <div className="aa-cartbox-summary">
                                            <ul>
                                                <li>
                                                    <a className="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" alt="img" /></a>
                                                    <div className="aa-cartbox-info">
                                                        <h4><a href="#">Product Name</a></h4>
                                                        <p>1 x $250</p>
                                                    </div>
                                                    <a className="aa-remove-product" href="#"><span className="fa fa-times"></span></a>
                                                </li>
                                                <li>
                                                    <a className="aa-cartbox-img" href="#"><img src="img/woman-small-1.jpg" alt="img" /></a>
                                                    <div className="aa-cartbox-info">
                                                        <h4><a href="#">Product Name</a></h4>
                                                        <p>1 x $250</p>
                                                    </div>
                                                    <a className="aa-remove-product" href="#"><span className="fa fa-times"></span></a>
                                                </li>
                                                <li>
                                                    <span className="aa-cartbox-total-title">
                                                        Total
                                                    </span>
                                                    <span className="aa-cartbox-total-price">
                                                        $500
                                                    </span>
                                                </li>
                                            </ul>
                                            <a className="aa-cartbox-checkout aa-primary-btn" href="checkout.html">Checkout</a>
                                        </div>
                                    </div>
                                    {/* <!-- / cart box --> */}
                                    {/* <!-- search box --> */}
                                    <div className="aa-search-box">
                                        <form action="">
                                            <input type="text" name="" placeholder="Search here ex. 'man' " />
                                            <button type="submit"><span className="fa fa-search"></span></button>
                                        </form>
                                    </div>
                                    {/* <!-- / search box --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- / header bottom  --> */}
            </header>
            {/* <!-- / header section --> */}
        </React.Fragment>
    );
}

export default Header;