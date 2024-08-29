import { useState, useTransition } from "react"
import { useNavigate } from "react-router"
import Subscriptions from "./Subscriptions.jsx"
import YourData from "./YourData.jsx"
import { useAuthStore } from "../../utils/authStore.js"
import { navbarRef } from "../../components/NavBar.jsx"

const AccountMain = () => {

    const [active, setActive] = useState('subs')
    const [isPending, startTransition] = useTransition()
    const navigate = useNavigate()

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

    const { token, user, updateToken, updateUser, authRedirect, setAuthRedirect, tokenError, updateTokenError } = useAuthStore((state) => ({
        token: state.token,
        user: state.user,
        updateUser: state.updateUser,
        updateToken: state.updateToken,
        tokenError: state.tokenError,
        updateTokenError: state.updateTokenError,
        authRedirect: state.authRedirect,
        setAuthRedirect: state.setAuthRedirect
    }))

    return (
        <div className="account-main">
            <div className="title">
                <h1>Hello { user.first_name }</h1>
            </div>
            <div className="account-nav">
                <div className="account-nav-overflow">
                    <div className={`nav-button ${active == 'subs'? 'active' : ''}`} onClick={ () => {
                        setActive(prev => 'subs')
                    } }>
                        <p>Subscriptions</p>
                    </div>
                    <div className={`nav-button ${active == 'data'? 'active' : ''}`} onClick={ () => {
                        setActive(prev => 'data')
                    } }>
                        <p>Your Data</p>
                    </div>
                </div>
            </div>
            {
                active == 'subs'? (
                    <Subscriptions />
                ):(
                    <YourData />
                )
            }
            <div className="bottom-account-bar">
                <h4>Logged in as <b>{ user.email }</b> <p onClick={ () => {
                    updateUser(false)
                    updateToken(false)
                    localStorage.removeItem('nivanUserData')
                    startTransition(()=>{
                        navigate(`/account/login`)
                     })
                } }>Logout?</p></h4>
            </div>
        </div>
    )
}

export default AccountMain