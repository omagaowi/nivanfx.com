import NavBar from "../../components/NavBar.jsx"
import { navbarRef } from "../../components/NavBar.jsx"
import { useRef, useState, useTransition, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { navAnimationsDesktop } from "../../animations/navAnimations.js"

import './account.css'
import AccountMain from "./AccountMain.jsx"
import MobileNav from "../../components/MobileNav.jsx"

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

    useEffect(()=>{
        let rendered
        sessionStorage.removeItem('formData')
        if(!rendered){
            navAnimationsDesktop()
            rendered = true
        }
    }, [])

    return (
        <div className="account-page">
            <NavBar white={ true }/>
            <MobileNav />
            <AccountMain />
        </div>
    )
}

export default Account