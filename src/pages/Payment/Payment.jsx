import NavBar from "../../components/NavBar.jsx"
import './payment.css'
import PaymentMain from "./PaymentMain.jsx"

import { useEffect } from "react"
import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import { navbarRef } from "../../components/NavBar.jsx"


const PaymentPage = () => {
    let rendered = false
    useEffect(()=>{
        sessionStorage.removeItem('formData')
        if(!rendered){
            navAnimationsDesktop()
            rendered = true
        }
    }, [])
    return (
        <div className="payment-page-container container">
            <NavBar white={ true }/>
            <PaymentMain />
        </div>
    )
}

export default PaymentPage