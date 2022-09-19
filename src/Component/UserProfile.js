import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserProfile(props) {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        let User = JSON.parse(localStorage.getItem('User'))
        let userID = User.user_id
        // console.log(userID)

        const dataa = {
            user_id: userID
        }

        axios.post('https://akashsir.in/myapi/ecom1/api/api-user-profile-list.php', dataa, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => setProfile(res.data))
    }, [profile])

    return (
        <React.Fragment>
            {
                profile === undefined ?
                    <h1> Log In Please</h1>
                    :
                    <div>
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

export default UserProfile;