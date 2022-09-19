import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ViewCart(props) {

    const [cart, setCart] = useState([])

    useEffect(() => {
        let userid = localStorage.getItem('User')
        let UseridParse = JSON.parse(userid)
        const userID = {
            user_id: UseridParse.user_id
        }
        axios.post('https://akashsir.in/myapi/ecom1/api/api-cart-list.php', userID, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => setCart(res.data.cart))
            .catch(err => console.log(err))
    }, [cart])

    const handleRemove = id => {
        window.confirm('Are You Sure?')
        const CartID = {
            cart_id: id
        }
        axios.post('https://akashsir.in/myapi/ecom1/api/api-cart-remove-product.php', CartID, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                alert(res.data.message);
            })
    }

    return (
        <React.Fragment>


            {/* <!-- catg header banner section --> */}
            <section id="aa-catg-head-banner">
                <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>Cart Page</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Cart</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- / catg header banner section --> */}

            {/* <!-- Cart view section --> */}
            <section id="cart-view">
                <div className="container" />
                <div className="row">
                    <div className="col-md-12">
                        <div className="cart-view-area">
                            <div className="cart-view-table">
                                <form action="">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Remove</th>
                                                    <th>Image</th>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            {
                                                cart === undefined ?
                                                <tbody>
                                                    <tr>
                                                        <th style={{textAlign:'center', fontSize:'40px',color:'#ff6666'}} colSpan={4}>Cart is Empty</th>
                                                    </tr>
                                                </tbody>
                                                    :   
                                                        cart.map(item =>
                                                            <tbody>
                                                                <tr>
                                                                    <td><a onClick={() => handleRemove(item.cart_id)} className="remove" href="#"><span className="fa fa-close"></span></a></td>
                                                                    <td><a href="#"><img src={item.product_image} alt="img" /></a></td>

                                                                    <td><Link onClick={() => props.quickView(item)} className="aa-cart-title" to='/ProductDetails'>{item.product_name}</Link></td>
                                                                    <td>₹{item.product_price}</td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                            }
                                        </table>
                                    </div>
                                </form>

                                {/* <!-- Cart Total view --> */}
                                <div className="cart-view-total">
                                    <a href="#" className="aa-cart-view-btn">Proced to Checkout</a>
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

export default ViewCart;