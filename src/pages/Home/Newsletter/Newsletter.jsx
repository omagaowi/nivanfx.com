import { useState } from 'react'
import './newsletter.css'
import Loader from '../../../assets/loader.gif';

const Newsletter = () => {

    const [emailText, setEmailText] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)

    const joinNewsletter = () => {
        if(emailText.length > 0){
            setLoading(true)
            fetch('https://nivan-api.onrender.com/joinnewsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailText
                })
            }).then((respnse)=>{
              return respnse.json()
            }).then((data)=>{
                console.log(data)
                setLoading(false)
                if(data.status){
                    setStatus({
                        status: 'success',
                        msg: data.data
                    })
                    setTimeout(()=>{
                        setStatus(false)
                    }, 1000)
                }else{
                    setStatus({
                        status: 'error',
                        msg: data.data
                    })
                    setTimeout(()=>{
                        setStatus(false)
                    }, 1000)
                }
                
            }).catch((err)=>{
                setLoading(false)
                console.log(err)
                setStatus({
                    status: 'error',
                    msg: 'Check your connection and try again!'
                })
                setTimeout(()=>{
                    setStatus(false)
                }, 1000)
            })
        }
    }

    return (
        <div className={`newsletter ${loading? 'loading': false}`}>
             <div class="form-area">
                <h2>NEWSLETTER</h2>
                <p class="detail">We are launching our newletter soon save your spot on the list.</p>
                <div for="" class="email-input">
                    <input type="text"  placeholder='Enter your Email' value={ emailText } onChange={(e)=>{
                        setEmailText(e.target.value)
                    }}/>
                </div>
                <button class="suscribe-btn" onClick={()=>{
                    joinNewsletter()
                }}>
                    <p>Suscribe</p>
                    <img src={ Loader } alt="" />
                </button>
                <div className={`newsletter-msg ${status? status.status : false}`}>
                    <h3>{ status? status.msg: '' }</h3>
                </div>
            </div>
        </div>
    )
}

export default Newsletter