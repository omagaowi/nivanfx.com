import { useEffect, useRef } from "react"
import NavBar from "../../components/NavBar.jsx"
import './mentorships.css'
import MentorshipsMain from "./MentorshipsMain.jsx"
import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import { runMentorshipAnimations } from "../../animations/mentorshipAnimations.js"
import Footer from "../../components/Footer.jsx"
import MobileNav from "../../components/MobileNav.jsx"
import { Helmet } from "react-helmet"

const Mentorships = () => {
    let rendered = false
    const mentorshipMainRef = useRef(false)
    useEffect(()=>{
        sessionStorage.removeItem('formData')
        if(!rendered){
            navAnimationsDesktop()
            runMentorshipAnimations()
            window.scrollTo({
                top: 0,
                left: 0,
              });
            rendered = true
            // if(window.location.href.split('/')[4] == 'mentorships'){
            //     if(window.location.href.split('/')[5]){
            //         if(window.location.hash == '#plans'){
            //             const elem = mentorshipMainRef.current.querySelector('#mentorship-plans-id')
            //             if (elem) {
            //                 elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            //             } else {
 
            //             }
            //         }else{
            //             const elem = mentorshipMainRef.current.querySelector('.service-hero-main')
            //             if (elem) {
            //                 elem.scrollIntoView({block: 'start' });
            //             } else {
 
            //             }
            //         }
            //     }else{
            //         const elem = mentorshipMainRef.current.querySelector('.service-hero-main')
            //         if (elem) {
            //             elem.scrollIntoView({block: 'start' });
            //         } else {
 
            //         }
            //     }
            // }
        }
    }, [])
    return (
        <>
            <Helmet>
                <title>Mentorships | Nivan FX</title>
                <meta name="google-site-verification" content="FGBWXtAisFxV7yCU1EgR7ozrntCKPJccWCr2GhnJq0M" />
                <meta name="description" content="Unlock your potential with NivanFX Mentorships. Learn proven strategies and expert guidance to become a profitable forex trader. Join our community today to start your journey toward financial success."/>
                <meta name="keywords" content="Nivan Fx, Forex trading, Forex education, trading signals, Forex mentorship, Nivan FX, paid signals, free signals, trading programs, Forex growth, trading mentorships" />
                <link rel="canonical" href="https://www.nivanfx.com/services/mentorships" />
            </Helmet>
            <div className="mentorships container" ref={ mentorshipMainRef }>
                <NavBar white = { true }/>
                <MobileNav />
                <MentorshipsMain />
                <Footer />
            </div>
        </>
    )
}

export default Mentorships