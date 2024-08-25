import { useEffect } from "react"
import BackgroundGrid from "../../components/BgGrid.jsx"
import NavBar from "../../components/NavBar.jsx"
import '../Home/home.css'
import HomeMain from "./HomeMain.jsx"

import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import { runHomeAnimations } from "../../animations/homeAnimations.js"
import { heroRef } from "./HeroSection/HeroSection.jsx"
import MobileNav from "../../components/MobileNav.jsx"
import { Helmet } from "react-helmet"


const Home = () => {
    let rendered = false
    useEffect(()=>{
        sessionStorage.removeItem('formData')
        if(!rendered){
            navAnimationsDesktop()
            runHomeAnimations(heroRef)
            rendered = true
        }
    }, [])
    return (
       <>
         <Helmet>
                <title>Nivan FX</title>
                <meta name="google-site-verification" content="FGBWXtAisFxV7yCU1EgR7ozrntCKPJccWCr2GhnJq0M" />
                <meta name="description" content="The official site of NivanFX. Join Nivan FX, a leading platform dedicated to educating and empowering Forex traders. Access expert mentorship, free and paid trading signals, and comprehensive programs designed to help you succeed in the Forex market. Start your trading journey with us today!"/>
                <meta name="keywords" content="Nivan Fx, Forex trading, Forex education, trading signals, Forex mentorship, Nivan FX, paid signals, free signals, trading programs, Forex growth" />
                <link rel="canonical" href="https://www.nivanfx.com/" />
        </Helmet>
         <div className="container home-container">
            <NavBar white = { false }/>
            <MobileNav />
            <HomeMain />
         </div>
       </>
    )
}

export default Home