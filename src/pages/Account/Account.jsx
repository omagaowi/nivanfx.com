import NavBar from "../../components/NavBar.jsx"
import { navbarRef } from "../../components/NavBar.jsx"
import { useRef, useState, useTransition, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { navAnimationsDesktop } from "../../animations/navAnimations.js"

import './account.css'
import AccountMain from "./AccountMain.jsx"

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
        if(!rendered){
            navAnimationsDesktop()
            rendered = true
        }
    }, [])

    return (
        <div className="account-page">
            <NavBar white={ true }/>
            <AccountMain />
        </div>
    )
}

export default Account