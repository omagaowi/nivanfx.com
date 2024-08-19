import './contact.css'
import NavBar from '../../components/NavBar.jsx'
import ContactMain from './ContactMain.jsx'
import { useEffect } from 'react'
import { navAnimationsDesktop } from '../../animations/navAnimations.js'
import { runContactAnimations } from '../../animations/contactAnimations.js'
import Footer from '../../components/Footer.jsx'
import MobileNav from '../../components/MobileNav.jsx'
import { Helmet } from 'react-helmet'


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
        <>
            <Helmet>
                <title>Contact Us | Nivan FX</title>
                <meta name="description" content="Have questions or need assistance? Reach out to Nivan FX, the leading platform dedicated to empowering and educating forex traders. Whether you're a beginner looking to learn the basics or an experienced trader seeking advanced strategies, our team is here to help. Contact us today for personalized support, expert advice, and answers to all your forex trading inquiries. Let Nivan FX guide you on your journey to becoming a successful trader." />
                <meta name="google-site-verification" content="FGBWXtAisFxV7yCU1EgR7ozrntCKPJccWCr2GhnJq0M" />
            </Helmet>
            <div className="container contact-container">
                <NavBar white = { false }/>
                <MobileNav />
                <ContactMain />
                <Footer black={ true }/>
            </div>
        </>
    )
}

export default Contact