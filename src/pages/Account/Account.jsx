import NavBar from "../../components/NavBar.jsx"
import { navbarRef } from "../../components/NavBar.jsx"
import { useRef, useState, useTransition, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { navAnimationsDesktop } from "../../animations/navAnimations.js"

import './account.css'
import AccountMain from "./AccountMain.jsx"
import MobileNav from "../../components/MobileNav.jsx"
import { Helmet } from "react-helmet"

const Account = () => {
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

    let rendered = false

    useEffect(()=>{
        sessionStorage.removeItem('formData')
        if(!rendered){
            navAnimationsDesktop()
            rendered = true
        }
    }, [])

    return (
        <>
              <Helmet>
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-4DX1JHEVR8"></script>
                <script>{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-4DX1JHEVR8');
                `}</script>
                <title>Your Account | Nivan FX</title>
                <meta name="google-site-verification" content="FGBWXtAisFxV7yCU1EgR7ozrntCKPJccWCr2GhnJq0M" />
                <meta name="description" content="Manage all your data with NivanFX in one place!"/>
                <meta name="keywords" content="Nivan Fx, Forex trading, Forex education, trading signals, Forex mentorship, Nivan FX, paid signals, free signals, trading programs, Forex growth, trading mentorships, nivanfx_account, account" />
                <link rel="canonical" href="https://www.nivanfx.com/services/mentorships" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>

             </Helmet>
             <div className="account-page">
                <NavBar white={ true }/>
                <MobileNav />
                <AccountMain />
            </div>
        </>
    )
}

export default Account