import '../styles/navbar.css'
import Logo from '../assets/logo2.png'
import Logo2 from '../assets/logo.png'
import { useRef, useState, useTransition, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toggleMobileNav } from './MobileNav'

let navbarRef

const NavBar = ({white}) => {
    navbarRef = useRef(false)
    const logoRef = useRef(false)
    const [isPending, startTransition] = useTransition()
    const navigate = useNavigate()

    if(isPending){
       if(navbarRef){
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
            <div className="logo logo-loading" id= "navbar-logo" ref={ logoRef } onClick={()=>{
                            startTransition(()=>{
                                navigate('/')
                            })
                        }}>
                {
                    white? (
                        <img src={ '/logo.png' } alt="" loading='lazy' onLoad={()=>{
                            if(logoRef){
                                logoRef.current.classList.remove('logo-loading')
                            }
                        }}/>
                    ):(
                        <img  src={ '/logo2.png' } alt="" loading='lazy' onLoad={()=>{
                            if(logoRef){
                                logoRef.current.classList.remove('logo-loading')
                            }
                        }}/>
                    )
                }
                  <div className="logo-loader"></div>
            </div>
            <div className="right-side">
                <ul>
                    <li>
                        <NavLink to = { '/' } onClick={(e)=>{
                            e.preventDefault()
                            startTransition(()=>{
                                navigate('/')
                            })
                        }}>Home</NavLink>
                         <p onClick={(e)=>{
                              e.preventDefault()
                            startTransition(()=>{
                                navigate('/')
                            })
                        }}>Home</p>
                    </li>
                    <li>
                        <NavLink to = { '/services' } onClick={(e)=>{
                            e.preventDefault()
                            startTransition(()=>{
                                navigate('/services')
                            })
                        }}>Services</NavLink>
                       <p onClick={(e)=>{
                            e.preventDefault()
                            startTransition(()=>{
                                navigate('/services')
                            })
                        }}>Services</p>
                    </li>
                    <li>
                        <NavLink to={ '/account/me' } onClick={(e)=>{
                            e.preventDefault()
                            startTransition(()=>{
                                navigate('/account/me')
                            })
                        }}>Account</NavLink>
                       <p onClick={(e)=>{
                            e.preventDefault()
                            startTransition(()=>{
                                navigate('/account/me')
                            })
                        }}>Account</p>
                    </li>
                    <li>
                        <a href='https://one.exnesstrack.net/a/yke3rzwi9i' target='default'>Broker</a>
                        <p onClick={ () => {
                            window.location.href = 'https://one.exnesstrack.net/a/yke3rzwi9i'
                        } } target='default'>Broker</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

export { navbarRef }