import { useEffect, useRef } from "react"
import NavBar from "../../components/NavBar.jsx"
import SignalsMain from "./SignalsMain.jsx"
import './signals.css'

import { runSignalsAnimations } from "../../animations/signalsAnimations.js"
import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import Footer from "../../components/Footer.jsx"
import MobileNav from "../../components/MobileNav.jsx"
import { Helmet } from "react-helmet"

const Signals = () => { 
    let rendered = false
    const signalsMainRef = useRef(false)
    useEffect(()=>{
        sessionStorage.removeItem('isOtp')
        if(!rendered){
            rendered = true
            navAnimationsDesktop()
            runSignalsAnimations()
            sessionStorage.removeItem('formData')
            if(window.location.href.split('/')[4] == 'signals'){
                window.scrollTo({
                    top: 0,
                    left: 0,
                  });
            }
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
                <title>Trading Signals | Nivan FX</title>
                <meta name="google-site-verification" content="FGBWXtAisFxV7yCU1EgR7ozrntCKPJccWCr2GhnJq0M" />
                <meta name="description" content="TMaximize your trading potential with NivanFX's free and paid forex signals. Get timely, accurate market insights and signals designed to boost your profitability, whether you're a beginner or an experienced trader."/>
                <meta name="keywords" content="Nivan Fx, Forex trading, Forex education, trading signals, Forex mentorship, Nivan FX, paid signals, free signals, trading programs, Forex growth" />
                <link rel="canonical" href="https://www.nivanfx.com/services/signals" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
        </Helmet>
         <div className="signals container" ref={ signalsMainRef }>
             <NavBar white = { true }/>
             <MobileNav />
             <SignalsMain />
             <Footer />
         </div>
       </>
    )
}

export default Signals