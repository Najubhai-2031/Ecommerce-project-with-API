import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup(props) {

    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            user_name: name,
            user_email: email,
            user_password: password,
            user_gender: gender,
            user_mobile: mobile,
            user_address: address
        }

        axios.post('https://akashsir.in/myapi/ecom1/api/api-signup.php', user, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(res => setMessage(res.data.message))
        setName('')
        setEmail('')
        setGender('')
        setMobile('')
        setPassword('')
        setAddress('')
        alert('Registration Successfull')
        navigate('/Login')
    }

    return (
        <React.Fragment>

            {/* <!-- catg header banner section --> */}
            <section id="aa-catg-head-banner">
                <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>Register</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Register</li>
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
                                        <div className="aa-myaccount-register checkout">
                                            <h4>Register</h4>
                                            <form action="" className="aa-login-form" onSubmit={handleSubmit}>
                                                {message}
                                                <label htmlFor="">Name <span>*</span></label>
                                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Narin Ahir" required/>

                                                <label htmlFor="">Email address<span>*</span></label>
                                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="example@gmail.com" required/>

                                                <label htmlFor="">Password<span>*</span></label>
                                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required/>

                                                <label htmlFor="">Gender<span>*</span></label>
                                                <input onChange={(e) => setGender(e.target.value)} value={gender} type="text" placeholder="Gender" required/>

                                                <label htmlFor="">Mobile<span>*</span></label>
                                                <input onChange={(e) => setMobile(e.target.value)} value={mobile} type="text" placeholder="Mobile" required/>

                                                <label htmlFor="">Address<span>*</span></label>
                                                <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder="Address" required/>

                                                <button type="submit" className="aa-browse-btn">Register</button>
                                                <button type="submit" className="aa-browse-btn" onClick={()=>navigate('/Login')}>Login</button>
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

export default Signup;