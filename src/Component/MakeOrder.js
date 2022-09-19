import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MakeOrder(props) {

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [payment, setPayment] = useState('')

    const navigate = useNavigate();


    const handleClick = () => {
        let aa = JSON.parse(localStorage.getItem('User'))

        console.log(aa.user_id)
        const Order = {
            user_id: aa.user_id,
            shipping_name: name,
            shipping_mobile: mobile,
            shipping_address: address,
            payment_method: payment
        }

        axios.post('https://akashsir.in/myapi/ecom1/api/api-add-order.php', Order, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => alert(res.data.message))

    }

    return (
        <React.Fragment>
            {/* <!-- catg header banner section --> */}
            <section id="aa-catg-head-banner">
                <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>Checkout</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Checkout</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- / catg header banner section --> */}
            {/* <!-- Cart view section --> */}
            <section id="aa-myaccount">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-myaccount-area">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="aa-myaccount-login checkout">
                                            <h4>Checkout</h4>
                                            <form action="" className="aa-login-form" onSubmit={handleClick}>

                                                <label htmlFor="">Name<span>*</span></label>
                                                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Narin Ahir" />

                                                <label htmlFor="">Mobile<span>*</span></label>
                                                <input onChange={(e) => setMobile(e.target.value)} type="text" placeholder="mobile" />

                                                <label htmlFor="">Address<span>*</span></label>
                                                <input onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />

                                                <label htmlFor="">Mobile<span>*</span></label>
                                                <input onChange={(e) => setPayment(e.target.value)} type="text" placeholder="Payment Method" />

                                                <button type="submit" className="aa-browse-btn">Place Order</button>
                                                <button type="submit" className="aa-browse-btn" onClick={() => navigate('/Cart')}>Cancel</button>
                                            </form>
                                        </div>
                                    </div>
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

export default MakeOrder;