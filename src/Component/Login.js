import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const login = {
            user_email: email,
            user_password: password
        }

        axios.post('https://akashsir.in/myapi/ecom1/api/api-login.php', login, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                setData(res.data.userdata)
                localStorage.setItem('User', JSON.stringify(res.data.userdata))
            })
        navigate('/UserProfile')
    }

    return (
        <React.Fragment>
            {/* <div>
                    Email <input name='email' type='text' onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
                    Password <input name='password' type='text' onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
                    <button onClick={handleSubmit}>Log In</button><br />
            </div> */}

            {/* <!-- catg header banner section --> */}
            <section id="aa-catg-head-banner">
                <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>Login</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Login</li>
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
                                            <h4>Login</h4>
                                            <form action="" className="aa-login-form" onSubmit={handleSubmit}>

                                                <label htmlFor="">Email address<span>*</span></label>
                                                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="example@gmail.com" />
                                                <label htmlFor="">Password<span>*</span></label>
                                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

                                                <button type="submit" className="aa-browse-btn">Login</button>
                                                <button type="submit" className="aa-browse-btn" onClick={()=>navigate('/singup')}>Register</button>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <p className="aa-lost-password"><Link to="/ForgotPassword">Forgot Password?</Link></p>
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

export default Login;