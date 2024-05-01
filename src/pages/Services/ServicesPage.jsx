import { useEffect } from "react"
import NavBar from "../../components/NavBar.jsx"
import ServiceSection from "./ServiceSection.jsx"
import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import { serviceRef } from "./ServiceSection.jsx"
import { serviceCardsAnimation } from "../../animations/homeAnimations.js"
import { servicesHeaderAnimation } from "../../animations/homeAnimations.js"
import Footer from "../../components/Footer.jsx"
import MobileNav from "../../components/MobileNav.jsx"


const ServicesPage = () => {
    let rendered = false
    useEffect(()=>{
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
        <div className="services-page">
            <NavBar white={ true } />
            <MobileNav />
            <ServiceSection />
            <Footer />
        </div>
    )
}

export default ServicesPage