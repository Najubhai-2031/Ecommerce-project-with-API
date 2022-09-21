import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserProfile(props) {

    const [profile, setProfile] = useState([])
    const [useridd, setUseridd] = useState('')

    useEffect(() => {
        let User = JSON.parse(localStorage.getItem('User'))
        if (User === null) {
            setUseridd('Unable To Connect With API, Please Try After Some Time')
        }
        else {
            let userID = User.user_id
            // console.log(userID)

            const dataa = {
                user_id: userID
            }

            axios.post('https://akashsir.in/myapi/ecom1/api/api-user-profile-list.php', dataa, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then(res => setProfile(res.data))
        }
    }, [profile])

    if (useridd) {
        return (
            <React.Fragment>

                {/* <!-- catg header banner section --> */}
                <section id="aa-catg-head-banner">
                    <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                    <div className="aa-catg-head-banner-area">
                        <div className="container">
                            <div className="aa-catg-head-banner-content">
                                <h2>My Profile</h2>
                                <ol className="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Profile</li>
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
                                        <h1 style={{ textAlign: 'center', fontSize: '40px', color: '#ff6666' }} colSpan={4}>{useridd}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- / Cart view section --> */}

            </React.Fragment >
        )
    }
    else {
        return (
            <React.Fragment>
                {
                    profile === undefined ?
                        <h1> Log In Please</h1>
                        :
                        <div>
                            {/* <!-- catg header banner section --> */}
                            <section id="aa-catg-head-banner">
                                <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                                <div className="aa-catg-head-banner-area">
                                    <div className="container">
                                        <div className="aa-catg-head-banner-content">
                                            <h2>My Profile</h2>
                                            <ol className="breadcrumb">
                                                <li><a href="index.html">Home</a></li>
                                                <li className="active">Profile</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- / catg header banner section --> */}
                            <img src={profile.user_photo} style={{ borderRadius: "50%", height: '50px' }} alt={profile.user_name} /><br />
                            <b>Name:</b>{profile.user_name}<br />
                            <b>Email:</b>{profile.user_email}<br />
                            <b>Gender:</b>{profile.user_gender}<br />
                            <b>Mobile:</b>{profile.user_mobile}<br />
                            <b>Name:</b>{profile.user_name}<br />
                        </div>
                }
            </React.Fragment>
        );
    }
}

export default UserProfile;
