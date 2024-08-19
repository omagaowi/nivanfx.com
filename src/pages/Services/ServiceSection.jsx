import './services.css'
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { useState, useRef, useTransition } from 'react';

import MentorshipsImg from '../../assets/mentorship.png'
import SignalsImg from '../../assets/signal.png'
import { navbarRef } from '../../components/NavBar.jsx';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';


let serviceRef






const cards = [
    {
        heading: 'Mentorships',
        text: 'Nivan FX provides specialized courses and programs for aspiring traders, offering essential skills to navigate the forex market confidently.',
        icon: <FaHandshakeAngle />,
        image: MentorshipsImg,
        link: '/services/mentorships'
    },
    {
        heading: 'Signals',
        text: 'At Nivan FX, access our curated signals for a market edge. Tailored for all levels, elevate your trading strategies effortlessly.',
        icon: <FaRegFlag />,
        image: SignalsImg,
        link: '/services/signals'
    },
    // {
    //     heading: 'Portfolio Management',
    //     text: 'At Nivan FX, we manage your portfolio, ensuring stress-free trading for a seamless investment experience.',
    //     icon: <MdOutlineAttachMoney />,
    //     image: PortfolioImg
    // },
]

const CardComponent = ({card}) => {
    const [push, setPush] = useState(false)

    const [isPending, startTransition] = useTransition()
    const navigate = useNavigate()

    if(isPending){
        if(navbarRef.current){
            navbarRef.current.querySelector('.loading').classList.add('show')
        }
    }else{
        if(navbarRef.current){
            navbarRef.current.querySelector('.loading').classList.remove('show')
        }
    }

    return (
        <div className={ `card no-opacity ${card.heading == 'Portfolio Management'? 'portfolio': card.heading.toLowerCase()}` } onMouseOver={ () => { setPush('push') } }  onMouseOut={ () => { setPush(false) } } onClick={ () => {
            startTransition(()=>{
                navigate(card.link)
            })
        } }>
                 <div className="card-bg">
                    <img src={ card.image } alt="" loading='lazy'/>
                 </div>
                    <div class={`card-stuff ${push}`}>
                            <div class="icon">
                               {
                                card.icon
                               }
                            </div>
                            <div class="sub-heading">
                                <h1>{card.heading}</h1>
                            </div>
                            <div class="text">
                                <p>{card.text}</p>
                            </div>
                            <div class="link">
                                <NavLink to = { card.link } onClick={ (e) => {
                                    e.preventDefault()
                                    startTransition(()=>{
                                        navigate(card.link)
                                    })
                                } }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                  </svg></NavLink>
                            </div>
                    </div>
        </div>
    )
}

const ServiceSection = () => {
     serviceRef = useRef(false)
    return (
        <div className="service-main" id={ window.location.href.split('/')[3] == ''? 'services-home' : 'services-other' } ref={ serviceRef }>
            <div className="heading">
                <h1 className='no-opacity'>Our Services</h1>
                <div className="line remove"></div>
            </div>
            <div className="cards">
                {
                    cards.map((card, index) => (
                        <CardComponent card = { card} />
                    ))
                }
            </div>
        </div>
    )
}


export default ServiceSection
export { serviceRef }