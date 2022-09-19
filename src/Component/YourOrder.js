import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function YourOrder(props) {

    const [order, setOrder] = useState([])


    useEffect(() => {
        let User = JSON.parse(localStorage.getItem('User'))
        let userId = User.user_id

        const dataa = {
            user_id: userId
        }
        axios.post('https://akashsir.in/myapi/ecom1/api/api-order-listing.php', dataa, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => setOrder(res.data.order_list))
    }, [])

    return (
        <React.Fragment>

            {/* <!-- catg header banner section --> */}
            <section id="aa-catg-head-banner">
                <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>My Order</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Order</li>
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
                                <div className="cart-view-table">


                                    {order.map(item =>
                                        <form action="">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Order id</th>
                                                            <th>Order Date</th>
                                                            <th>Order Status</th>
                                                            <th>Total Amount</th>
                                                            <th>Shipping Name</th>
                                                            <th>Shipping Mobile</th>
                                                            <th>Shipping Address</th>
                                                            <th>Payment Method</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{item.order_id}</td>
                                                            <td>{item.order_date}</td>
                                                            <td>{item.order_status}</td>
                                                            <td>{item.total_amount}</td>
                                                            <td>{item.shipping_name}</td>
                                                            <td>{item.shipping_mobile}</td>
                                                            <td>{item.shipping_address}</td>
                                                            <td>{item.payment_method}</td>
                                                        </tr>
                                                    </tbody>
                                                    <table border="1px solid" width='100%'>
                                                        <thead>
                                                            <tr>
                                                                <th>Product Name</th>
                                                                <th>Quantity</th>
                                                                <th>Amount</th>
                                                                <th>Total Amount</th>
                                                                <th>Image</th>
                                                            </tr>
                                                        </thead>
                                                        {item.order_details.map(item =>
                                                            <>

                                                                <tbody>
                                                                    <tr>
                                                                        <td><a href="#"><img src={item.product_image} alt="img" /></a></td>

                                                                        <td><Link onClick={() => props.quickView(item)} className="aa-cart-title" to='/ProductDetails'>{item.product_name}</Link></td>
                                                                        <td>₹{item.product_price}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </>
                                                        )}
                                                    </table>

                                                </table>
                                            </div>
                                        </form>
                                    )}


                                    {/* <!-- Cart Total view --> */}
                                    <div className="cart-view-total">
                                        <a href="#" className="aa-cart-view-btn">Proced to Checkout</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- / Cart view section --> */}

        </React.Fragment >
    );
}

export default YourOrder;