import { useEffect, useRef } from "react"
import NavBar from "../../components/NavBar.jsx"
import SignalsMain from "./SignalsMain.jsx"
import './signals.css'

import { runSignalsAnimations } from "../../animations/signalsAnimations.js"
import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import Footer from "../../components/Footer.jsx"

const Signals = () => { 
    let rendered = false
    const signalsMainRef = useRef(false)
    useEffect(()=>{
        if(!rendered){
            rendered = true
            navAnimationsDesktop()
            runSignalsAnimations()
            if(window.location.href.split('/')[4] == 'signals'){
                window.scrollTo({
                    top: 0,
                    left: 0,
                  });
            }
        }
    }, [])
    return (
        <div className="signals container" ref={ signalsMainRef }>
             <NavBar white = { true }/>
             <SignalsMain />
             <Footer />
        </div>
    )
}

export default Signals