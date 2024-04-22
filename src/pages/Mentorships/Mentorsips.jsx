import { useEffect, useRef } from "react"
import NavBar from "../../components/NavBar.jsx"
import './mentorships.css'
import MentorshipsMain from "./MentorshipsMain.jsx"
import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import { runMentorshipAnimations } from "../../animations/mentorshipAnimations.js"
import Footer from "../../components/Footer.jsx"

const Mentorships = () => {
    let rendered = false
    const mentorshipMainRef = useRef(false)
    useEffect(()=>{
        if(!rendered){
            navAnimationsDesktop()
            runMentorshipAnimations()
            if(window.location.href.split('/')[4] == 'mentorships'){
                if(window.location.href.split('/')[5]){
                    if(window.location.hash == '#plans'){
                        console.log('aa')
                        const elem = mentorshipMainRef.current.querySelector('#mentorship-plans-id')
                        if (elem) {
                            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                            console.log("Element not found");
                        }
                    }else{
                        const elem = mentorshipMainRef.current.querySelector('.service-hero-main')
                        if (elem) {
                            elem.scrollIntoView({block: 'start' });
                        } else {
                            console.log("Element not found");
                        }
                    }
                }else{
                    const elem = mentorshipMainRef.current.querySelector('.service-hero-main')
                    if (elem) {
                        elem.scrollIntoView({block: 'start' });
                    } else {
                        console.log("Element not found");
                    }
                }
            }
        }
    }, [])
    return (
        <div className="mentorships container" ref={ mentorshipMainRef }>
            <NavBar white = { true }/>
            <MentorshipsMain />
            <Footer />
        </div>
    )
}

export default Mentorships