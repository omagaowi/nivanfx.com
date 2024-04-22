import './contact.css'
import NavBar from '../../components/NavBar.jsx'
import ContactMain from './ContactMain.jsx'
import { useEffect } from 'react'
import { navAnimationsDesktop } from '../../animations/navAnimations.js'
import { runContactAnimations } from '../../animations/contactAnimations.js'
import Footer from '../../components/Footer.jsx'


const Contact = () => {
    let rendered = false
    useEffect(()=>{
        if(!rendered){
            navAnimationsDesktop()
            setTimeout(() => {
                runContactAnimations()
            }, 200);
            window.scrollTo({
                top: 0,
                left: 0,
              });
            rendered = true
        }
    }, [])
    return (
        <div className="container contact-container">
             <NavBar white = { false }/>
             <ContactMain />
             <Footer black={ true }/>
        </div>
    )
}

export default Contact