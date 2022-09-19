import React from 'react';

function WishList(props) {
    return (
        <React.Fragment>


            {/* <!-- catg header banner section --> */}
            <section id="aa-catg-head-banner">
                <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img"/>
                    <div className="aa-catg-head-banner-area">
                        <div className="container">
                            <div className="aa-catg-head-banner-content">
                                <h2>Wishlist Page</h2>
                                <ol className="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Wishlist</li>
                                </ol>
                            </div>
                        </div>
                    </div>
            </section>
            {/* <!-- / catg header banner section --> */}

            {/* <!-- Cart view section --> */}
            <section id="cart-view">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cart-view-area">
                                <div className="cart-view-table aa-wishlist-table">
                                    <form action="">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Stock Status</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><a className="remove" href="#"><fa className="fa fa-close"></fa></a></td>
                                                        <td><a href="#"><img src="img/man/polo-shirt-1.png" alt="img"/></a></td>
                                                        <td><a className="aa-cart-title" href="#">Polo T-Shirt</a></td>
                                                        <td>$250</td>
                                                        <td>In Stock</td>
                                                        <td><a href="#" className="aa-add-to-cart-btn">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a className="remove" href="#"><fa className="fa fa-close"></fa></a></td>
                                                        <td><a href="#"><img src="img/man/polo-shirt-2.png" alt="img"/></a></td>
                                                        <td><a className="aa-cart-title" href="#">Polo T-Shirt</a></td>
                                                        <td>$150</td>
                                                        <td>In Stock</td>
                                                        <td><a href="#" className="aa-add-to-cart-btn">Add To Cart</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a className="remove" href="#"><fa className="fa fa-close"></fa></a></td>
                                                        <td><a href="#"><img src="img/man/polo-shirt-3.png" alt="img"/></a></td>
                                                        <td><a className="aa-cart-title" href="#">Polo T-Shirt</a></td>
                                                        <td>$50</td>
                                                        <td>In Stock</td>
                                                        <td><a href="#" className="aa-add-to-cart-btn">Add To Cart</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- / Cart view section --> */}



        </React.Fragment>
    );
}

export default WishList;