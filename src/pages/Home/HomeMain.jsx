import { useEffect, useRef, useState } from "react"
import FirstSection from "./FirstSection/FirstSection.jsx"
import HeroSection from "./HeroSection/HeroSection.jsx"
import { navbarRef } from "../../components/NavBar.jsx"
import ServiceSection from "../Services/ServiceSection.jsx"
import Socails from "./Socials/Socials.jsx"
import Newsletter from "./Newsletter/Newsletter.jsx"
import Footer from "../../components/Footer.jsx"


const HomeMain = () => {
    const homeMainRef = useRef(false)
    const firstRef = useRef(false)


    const scrollMatch = () => {
        // if(window.location.href.split('/')[3] == ''){
            const scrollPosition = window.scrollY
            const nintyPercent = (90 / 100) * window.innerHeight
            if(scrollPosition >= nintyPercent){
                if(navbarRef){
                    if(navbarRef.current){
                        navbarRef.current.classList.add("white");
                        navbarRef.current.querySelector(".logo img").src = '/images/logo.webp'
                    }
                }
            }else{
            if(navbarRef){
                if(navbarRef.current){
                     navbarRef.current.classList.remove("white");
                     navbarRef.current.querySelector(".logo img").src = '/images/logo2.webp'
                }
            }
            }
        // }
    }
    useEffect(()=>{
        window.addEventListener('scroll', scrollMatch)
        const scrollPosition = window.scrollY
        const nintyPercent = (90 / 100) * window.innerHeight
            if(scrollPosition >= nintyPercent){
               if(navbarRef){
                    if(navbarRef.current){
                        navbarRef.current.classList.add("white");
                    }
                }
            //   navbarRef.current.querySelector(".logo img").src = localStorage.getItem('navLogo')? localStorage.getItem('navLogo'): 'http://localhost:3000/logo' ;
            }else{
                if(navbarRef){
                    if(navbarRef.current){
                        navbarRef.current.classList.remove("white");
                    }
                }
            //  navbarRef.current.querySelector(".logo img").src =localStorage.getItem('navLogo2')? localStorage.getItem('navLogo2'): 'http://localhost:3000/logo2';
            }
        return () => {
            window.removeEventListener('scroll', scrollMatch)
        }
    }, [])
    return (
        <div className="home-main" ref={ homeMainRef }>
            <HeroSection />
           <div className="full-body">
                <div className="body-part part1" ref={ firstRef }>
                </div>
                <div className="body-part">
                    <div className="white-bg"></div>
                    <FirstSection />
                </div>
                <div className="body-part">
                    <div className="white-bg"></div>
                    <ServiceSection />
                </div>
                <div className="body-part">
                    <div className="white-bg"></div>
                    <Socails />
                </div>
                <div className="body-part">
                    <div className="white-bg"></div>
                    <Newsletter />
                </div>
                <Footer />
           </div>
        </div>
    )
}

export default HomeMain
