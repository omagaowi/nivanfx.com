import NavBar from '../../components/NavBar.jsx'
import './login.css'
import { navAnimationsDesktop } from '../../animations/navAnimations.js'
import { useEffect } from 'react'
import LoginMain from './LoginMain.jsx'
import MobileNav from '../../components/MobileNav.jsx'

const LoginPage = () => {
        let rendered = false
        useEffect(()=>{
            sessionStorage.removeItem('formData')
            if(!rendered){
                navAnimationsDesktop()
                rendered = true
            }
        }, [])
    return (
        <div className="login-container container">
            <NavBar white = { true }/>
            <MobileNav />
            <LoginMain />
        </div>
    )
}

export default LoginPage