import { navbarRef } from "../../components/NavBar"
import { useEffect, useRef, useState, useTransition } from "react"
import { redirect, useNavigate } from "react-router"
import { root } from "../../utils/authStore.js"
import Error from "../../components/Error.jsx"


const LoginMain = () => {

    const [isPending, startTransition] = useTransition()
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const loginRef = useRef(false)

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




    

    const submitEmail = (e) => {
        const email = e.target.email.value
        if(email != ''){
            navbarRef.current.querySelector('.loading').classList.add('show');
            loginRef.current.classList.add('load');
            fetch(`${root}/auth/user`, {
                method: 'POST',
                body: JSON.stringify({
                    email: email
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json()).then((data) => {
                if(data.status){
                    sessionStorage.setItem('formData', JSON.stringify({
                        email: email,
                        isVerified: false,
                        login: data.data,
                        redirect: false
                    }))
                    navbarRef.current.querySelector('.loading').classList.remove('show')
                    loginRef.current.classList.add('load');
                    startTransition(()=>{
                        navigate('/account/verify')
                      })
                }else{
                    sessionStorage.setItem('formData', JSON.stringify({
                        email: email,
                        isVerified: false,
                        login: false,
                        redirect: false
                    }))
                    navbarRef.current.querySelector('.loading').classList.remove('show')
                    loginRef.current.classList.add('load');
                    startTransition(()=>{
                        navigate('/account/verify')
                    })
                }
            }).catch((err) => {
                navbarRef.current.querySelector('.loading').classList.remove('show')
                loginRef.current.classList.remove('load');
                setError(prev => 'An Error Occured!')
            })
        }else{
            setError(prev => 'Enter a valid email adress!')
        }
    }

    return (
        <div className="login-main" ref={ loginRef }>
            <div className="login-content">
                <Error error={ error ? true: false } msg = { error } setError = { setError }/>
                <form action="" className="login-form" onSubmit={ (e) => {
                    e.preventDefault()
                    submitEmail(e)
                } }>
                    <h2>Welcome !</h2>
                    <p>Login or Create your NivanFX Account</p>
                    <label htmlFor="">
                        <input type="email" name="email" placeholder="Email"/>
                    </label>
                    <button>Continue</button>
                </form>
            </div>
        </div>
    )
}

export default LoginMain