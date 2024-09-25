import { useEffect, useState, useRef } from "react"
import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import NavBar from "../../components/NavBar.jsx"
import { useTransition } from "react"
import './login.css'
import { redirect, useNavigate } from "react-router"
import Error from "../../components/Error.jsx"
import { navbarRef } from "../../components/NavBar.jsx"

import { root, apiKeys, useAuthStore } from "../../utils/authStore.js"
import MobileNav from "../../components/MobileNav.jsx"
import { OTPTemplateLoggedin, OTPTemplateLoggedOut } from "../../utils/emailTemps/otpTemp.js"




const VerifyOTPMain = () => {
    const {user, updateUser, token, updateToken} = useAuthStore((state) => ({
        updateUser: state.updateUser,
        user: state.user,
        token: state.token,
        updateToken: state.updateToken
    }))


    const [otp, setOTP] = useState(false)
    const [userInput, setUserInput] = useState()
    const [formData, setFormData] = useState(false)
    
    const [isPending, startTransition] = useTransition()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    
    const [error, setError] = useState(false)
    const inputRef = useRef(false)
    const formRef = useRef(false)

    if(isPending){
        if(navbarRef){
            if(navbarRef.current){
                navbarRef.current.querySelector('.loading').classList.add('show')
            }
        }
    }else{
        if(navbarRef){
            if(navbarRef.current){
                navbarRef.current.querySelector('.loading').classList.remove('show')
            }
        }
    }


    const loginUser = async () => {
        try{
            const url = `${root}/auth/login`
            const body = {
                email: formData.email
            }
            const headers = {
                'x_api_key': apiKeys.api,
                'Content-Type': 'application/json'
              }
              const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
              })
              const data = await response.json()
              return data
        }catch(err){
              throw err
        }
    }


    const sendOTP = (value) => {
        if(navbarRef){
            if(navbarRef.current){
                navbarRef.current.querySelector('.loading').classList.add('show')
            }
        }
        const OTP = value? value : Number(Date.now().toString().split('').splice(5, 6).join(''))
        const url = "https://api.brevo.com/v3/smtp/email";
        // Define the API key and email data
        formRef.current.classList.add('load')
        const emailData = {
        sender: {
            name: "NivanFX",
            email: "omagaowi@gmail.com",
        },
        to: [
            {
            email: JSON.parse(sessionStorage.getItem('formData')).email,
            name: "Hello User",
            },
        ],
        subject: "Here is your 6 digit verification code",
        htmlContent: JSON.parse(sessionStorage.getItem('formData')).login ? OTPTemplateLoggedin(OTP, JSON.parse(sessionStorage.getItem('formData')).login, new Date().getFullYear()) : OTPTemplateLoggedOut(OTP, new Date().getFullYear()),
        textContent: `Your 6 digit verification code to activate your nivan fx account is ${OTP}`
        };
        if(!value){
            console.log(false, OTP)
            fetch(url, {
                method: "POST", 
                headers: {
                  accept: "application/json",
                  "api-key": apiKeys.email,
                  "content-type": "application/json",
                },
                body: JSON.stringify(emailData),
              })
                .then((response) => response.json())
                .then((data) => {
                  setOTP(prev => OTP)
                  sessionStorage.setItem('isOtp', JSON.stringify({value: OTP}))
                  formRef.current.classList.remove('load')
                  if(navbarRef){
                    if(navbarRef.current){
                        navbarRef.current.querySelector('.loading').classList.remove('show')
                    }
                   }
                })
                .catch((error) => {
                    formRef.current.classList.remove('load')
                    if(navbarRef){
                        if(navbarRef.current){
                            navbarRef.current.querySelector('.loading').classList.remove('show')
                        }
                    }
    
                });
        }else{
            console.log(true, OTP)
            setOTP(prev => OTP)
             sessionStorage.setItem('isOtp', JSON.stringify({value: OTP}))
            formRef.current.classList.remove('load')
            if(navbarRef){
              if(navbarRef.current){
                 navbarRef.current.querySelector('.loading').classList.remove('show')
              }
            }
        }
    }


    useEffect(() => {
        const otpSet = JSON.parse(sessionStorage.getItem('isOtp'))
        sendOTP(otpSet? otpSet.value : false)
        if(!JSON.parse(sessionStorage.getItem('formData'))){
            startTransition(()=>{
                navigate('/account/login')
            })
        }
        setFormData(JSON.parse(sessionStorage.getItem('formData')))
    }, [])



    const submitOTP = (userOTP, target) => {
        if(userOTP != ''){
            if(userOTP == otp){
                if(formData.login){
                    // navbarRef.current.querySelector('.loading').classList.add('show')
 
                    setLoading(true)
                    loginUser().then((data) => {
                        setLoading(false)
                        if(data.status){
                            localStorage.setItem('nivanUserData', JSON.stringify({token: data.data.token}))
                            updateUser(data.data)
                            updateToken(data.data.token)
                             sessionStorage.removeItem('formData')
                            startTransition(()=>{
                                if(formData.redirect){
                                    startTransition(()=>{
                                        navigate(formData.redirect)
                                    })
                                }else{
                                    startTransition(()=>{
                                         navigate('/account/me')
                                    })
                                }
                            })
                        }else{
                            setError(prev => 'An Error Occured!')
                        }
                    }).catch((err) =>{
                        setLoading(false)
 
                        setError(prev => 'An Error Occured!')
                    })
                }else{
                    sessionStorage.setItem('formData', JSON.stringify({
                        email: formData.email,
                        isVerified: true,
                        login: formData.login,
                        redirect: formData.redirect
                    }))
                    startTransition(()=>{
                        navigate('/account/personaldetails')
                    })
                }
            }else{
                target.value = ''
                target.removeAttribute('readonly')
                setError(prev => 'invalid otp code!!')
            }
        }else{
            inputRef.current.value = ''
            inputRef.current.removeAttribute('readonly', 'readonly')
            setError(prev => 'invalid otp code!!')
        }
    }

    return (
        <div className="login-main" ref={ formRef } style={ loading? { pointerEvents: 'none', opacity: 0.7 } : {} }>
             <Error error={ error ? true: false } msg = { error } setError = { setError }/>
            <div className="login-content">
               {
                formData? (
                    <form action="" className="login-form otp-form" onSubmit={ (e) => {
                        e.preventDefault()
                        const userOTP = e.target.otp.value
                        submitOTP(userOTP, e.target.otp);
                    } }>
                        <h2>Enter OTP !</h2>
                        <p>Enter the 6 digit code we sent to <b>{formData.email}</b></p>
                        <label htmlFor="">
                            <input type="number" value={ userInput } name = 'otp' placeholder="6 digit code" ref={ inputRef } onChange={(e) => {
                                setUserInput(prev => e.target.value)
                                // if(e.target.value.length == 6){
                                //     e.target.setAttribute('readonly', 'readonly')
                                //     submitOTP(e.target.value, e.target);
                                // }else{
                                //     e.target.removeAttribute('readonly', 'readonly')
                                // }
                            }}/>
                        </label>
                        <button>Continue</button>
                    </form>
                ):(
                    <></>
                )
               }
                <span className="resend">Didn't get an email <b onClick={ () => {
                    sendOTP()
                } }>Resend email ?</b></span>
            </div>
        </div>
    )
}


const VerifyOTPPage = () => {
    let rendered = false
    useEffect(()=>{
        if(!rendered){
            navAnimationsDesktop()
            rendered = true
        }
    }, [])
    return (
        <div className="login-container container">
             <NavBar white = { true }/>
             <MobileNav />
             <VerifyOTPMain />
        </div>  
    )
}

export default VerifyOTPPage