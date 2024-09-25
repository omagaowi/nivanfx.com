import NavBar from "../../components/NavBar.jsx"
import './payment.css'
import PaymentMain from "./PaymentMain.jsx"

import { useEffect } from "react"
import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import { navbarRef } from "../../components/NavBar.jsx"
import MobileNav from "../../components/MobileNav.jsx"


const PaymentPage = () => {
    let rendered = false
    useEffect(()=>{
        sessionStorage.removeItem('formData')
        sessionStorage.removeItem('isOtp')
        if(!rendered){
            navAnimationsDesktop()
            rendered = true
        }
    }, [])
    return (
        <div className="payment-page-container container">
            <NavBar white={ true }/>
            <MobileNav />
            <PaymentMain />
        </div>
    )
}

export default PaymentPage