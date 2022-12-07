import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import {useEffect} from 'react'

function EmailConfirm(props) {
    
    const {token} = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        async function getData() {

            const response = await axios.post('/user/emailconfirm', {token})
            console.log("🚀 ~ response", response)

            if (response.data.success) {

                setTimeout(() => navigate('/'), 3000)

            }
        }

        getData()
    }, [])

    return (
        <div>
            Thank you for registering
            <br />
            Please wait while verifying your email
            <br />
            Your token {token}
        </div>
    );
}

export default EmailConfirm;