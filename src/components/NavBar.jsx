import '../styles/navbar.css'
import Logo from '../assets/logo2.png'
import Logo2 from '../assets/logo.png'
import { useRef, useState, useTransition, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toggleMobileNav } from './MobileNav'

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
            <div className="hamburger" onClick={() => {
                toggleMobileNav(true)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
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