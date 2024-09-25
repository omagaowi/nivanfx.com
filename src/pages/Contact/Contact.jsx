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
    sessionStorage.removeItem('isOtp')
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
                 <script async src="https://www.googletagmanager.com/gtag/js?id=G-4DX1JHEVR8"></script>
                 <script>{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-4DX1JHEVR8');
                `}</script>
                <title>Contact Us | Nivan FX</title>
                <meta name="description" content="Have questions or need assistance? Reach out to Nivan FX, the leading platform dedicated to empowering and educating forex traders. Whether you're a beginner looking to learn the basics or an experienced trader seeking advanced strategies, our team is here to help. Contact us today for personalized support, expert advice, and answers to all your forex trading inquiries. Let Nivan FX guide you on your journey to becoming a successful trader." />
                <meta name="google-site-verification" content="FGBWXtAisFxV7yCU1EgR7ozrntCKPJccWCr2GhnJq0M" />
                <link rel="canonical" href="https://www.nivanfx.com/contact" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
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