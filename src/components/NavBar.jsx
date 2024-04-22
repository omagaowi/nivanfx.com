import '../styles/navbar.css'
import Logo from '../assets/logo2.png'
import Logo2 from '../assets/logo.png'
import { useRef, useState, useTransition, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

let navbarRef

const NavBar = ({white}) => {
    navbarRef = useRef(false)
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
        <nav ref={ navbarRef } className={white? 'white remove': 'remove'}>
            <div className="loading">
                <div className="loader"></div>
            </div>
            <div className="logo" onClick={()=>{
                            startTransition(()=>{
                                navigate('/')
                            })
                        }}>
                {
                    white? (
                        <img src={ Logo2  } alt="" loading='lazy'/>
                    ):(
                        <img src={ Logo } alt="" loading='lazy'/>
                    )
                }
            </div>
            <div className="right-side">
                <ul>
                    <li>
                        <a onClick={()=>{
                            startTransition(()=>{
                                navigate('/')
                            })
                        }}>Home</a>
                        <a onClick={()=>{
                            startTransition(()=>{
                                navigate('/')
                            })
                        }}>Home</a>
                    </li>
                    <li>
                        <a onClick={()=>{
                            startTransition(()=>{
                                navigate('/services')
                            })
                        }}>Services</a>
                        <a onClick={()=>{
                            startTransition(()=>{
                                navigate('/services')
                            })
                        }}>Services</a>
                    </li>
                    <li>
                        <a onClick={()=>{
                            startTransition(()=>{
                                navigate('/contact')
                            })
                        }}>Contact</a>
                        <a onClick={()=>{
                            startTransition(()=>{
                                navigate('/contact')
                            })
                        }}>Contact</a>
                    </li>
                    <li>
                        <a href='https://one.exnesstrack.net/a/yke3rzwi9i' target='default'>Broker</a>
                        <a href='https://one.exnesstrack.net/a/yke3rzwi9i' target='default'>Broker</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

export { navbarRef }