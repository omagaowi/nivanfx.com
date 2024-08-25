import { useEffect } from "react"
import NavBar from "../../components/NavBar.jsx"
import ServiceSection from "./ServiceSection.jsx"
import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import { serviceRef } from "./ServiceSection.jsx"
import { serviceCardsAnimation } from "../../animations/homeAnimations.js"
import { servicesHeaderAnimation } from "../../animations/homeAnimations.js"
import Footer from "../../components/Footer.jsx"
import MobileNav from "../../components/MobileNav.jsx"
import { Helmet } from "react-helmet"


const ServicesPage = () => {
    let rendered = false
    useEffect(()=>{
        sessionStorage.removeItem('formData')
        if(!rendered){
            navAnimationsDesktop()
            setTimeout(()=>{
                servicesHeaderAnimation()
                setTimeout(() => {
                    const isServiceDesktop = window.innerWidth > 820
                    serviceRef.current.querySelectorAll('.cards .card').forEach((card, index) => {
                        if(card){
                            if(isServiceDesktop){
                                card.classList.add("remove");
                                serviceCardsAnimation(card, index, isServiceDesktop);
                            }else{
                                card.classList.add("remove-mobile");
                                serviceCardsAnimation(card, index, isServiceDesktop);
                            }
                        }
                    })
                }, 500);
            }, 700)
            window.scrollTo({
                top: 0,
                left: 0,
              });
            rendered = true
        }
    }, [])
    return (
       <>
            <Helmet>
                <title>Nivan FX | Services</title>
                <meta name="google-site-verification" content="FGBWXtAisFxV7yCU1EgR7ozrntCKPJccWCr2GhnJq0M" />
                <meta name="description" content="Explore NivanFX's comprehensive forex services, including free and paid trading signals, and expert mentorships. Whether you're new to trading or looking to enhance your skills, we provide the tools and guidance to help you achieve consistent success."/>
                <meta name="keywords" content="Nivan Fx, Forex trading, Forex education, trading signals, Forex mentorship, Nivan FX, paid signals, free signals, trading programs, Forex growth, trading signals, trading mentorships, trading services" />
                <link rel="canonical" href="https://www.nivanfx.com/services" />
            </Helmet>
            <div className="services-page">
                <NavBar white={ true } />
                <MobileNav />
                <ServiceSection />
                <Footer />
            </div>
       </>
    )
}

export default ServicesPage