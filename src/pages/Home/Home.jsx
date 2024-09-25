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
        sessionStorage.removeItem('isOtp')
        if(!rendered){
            navAnimationsDesktop()
            runHomeAnimations(heroRef)
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
                <title>Nivan FX</title>
                <meta name="google-site-verification" content="FGBWXtAisFxV7yCU1EgR7ozrntCKPJccWCr2GhnJq0M" />
                <meta name="description" content="The official site of NivanFX. Join Nivan FX, a leading platform dedicated to educating and empowering Forex traders. Access expert mentorship, free and paid trading signals, and comprehensive programs designed to help you succeed in the Forex market. Start your trading journey with us today!"/>
                <meta name="keywords" content="Nivan Fx, Forex trading, Forex education, trading signals, Forex mentorship, Nivan FX, paid signals, free signals, trading programs, Forex growth" />
                <link rel="canonical" href="https://www.nivanfx.com/" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
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