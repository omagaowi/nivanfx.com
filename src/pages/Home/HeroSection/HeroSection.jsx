import { useRef, useTransition } from 'react'
import { useNavigate } from 'react-router'
import './hero.css'
import { navbarRef } from '../../../components/NavBar.jsx'


let heroRef
const HeroSection = () => {
    heroRef = useRef(false)
    const navigate = useNavigate()
    const [isPending, startTransition] = useTransition()
    if(isPending){
        if(navbarRef.current){
            if(navbarRef.current){
                navbarRef.current.querySelector('.loading').classList.add('show')
            }
        }
    }else{
        if(navbarRef.current){
            navbarRef.current.querySelector('.loading').classList.remove('show')
        }
    }
    return (
        <div className="hero-section" ref={ heroRef }>
            <div className="hero-image"></div>
            <div className="hero-content remove">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1 className='no-opacity'>Empower your</h1>
                        <h1 className='no-opacity'>Trading...</h1>
                    </div>
                    <div className="buttons no-opacity">
                        <button onClick={()=>{
                            startTransition(()=>{
                                navigate('services/mentorships/#plans')
                            })
                        }}>Explore Plans</button>
                        <button  onClick={()=>{
                            startTransition(()=>{
                                navigate('/contact')
                            })
                        }}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
export { heroRef }