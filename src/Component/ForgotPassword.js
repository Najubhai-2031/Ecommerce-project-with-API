import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        let ForgotPassword = {
            user_email: email
        }
        axios.post('https://akashsir.in/myapi/ecom1/api/api-forgot-password.php', ForgotPassword, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(res => setMessage(res.data.message))
    }
    return (
        <React.Fragment>
            

            {/* <!-- catg header banner section --> */}
            <section id="aa-catg-head-banner">
                <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>Login or Register</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Forgot Password</li>
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
                                            <h4>Forgot Password</h4>
                                            <form action="" className="aa-login-form" onSubmit={handleSubmit}>
                                                <span style={{color:'red'}}>{message}</span><br/>

                                                <label htmlFor="">Email address<span>*</span></label>
                                                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="example@gmail.com" />
                                                <button type="submit" className="aa-browse-btn">Submit</button>
                                                <button type="submit" onClick={()=>navigate('/Login')} className="aa-browse-btn">Back To Login</button>
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

export default ForgotPassword;