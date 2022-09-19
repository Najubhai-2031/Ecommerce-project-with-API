import axios from 'axios';
import React, { useState } from 'react';

function ChangePassword(props) {

    const [userid, setUserid] = useState('')
    const [opass, setOpass] = useState('')
    const [npass, setNpass] = useState('')
    const [cpass, setCpass] = useState('')
    const [message, setMessage] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();
        const ChangePassword = {
            user_id:userid,
            opass:opass,
            npass:npass,
            cpass:cpass
        }

        axios.post('https://akashsir.in/myapi/ecom1/api/api-change-password.php',ChangePassword,{
            headers:{'Content-Type':'multipart/form-data'}
        })
        .then(res=>{setMessage(res.data.message);
        console.log(res)
        })
    }

    return (
        <React.Fragment>
            <div>
                <form onSubmit={handleSubmit}>
                    User Id <input type='text' name='userid' onChange={(e) => setUserid(e.target.value)} value={userid} /> <br />
                    Old Password <input type='text' name='userid' onChange={(e) => setOpass(e.target.value)} value={opass} /> <br />
                    New Password <input type='text' name='userid' onChange={(e) => setNpass(e.target.value)} value={npass} /> <br />
                    Confirm Password <input type='text' name='userid' onChange={(e) => setCpass(e.target.value)} value={cpass} /> <br />
                    <input type='submit' /><br/>
                    {message}
                </form>
            </div>

        </React.Fragment>
    );
}

export default ChangePassword;