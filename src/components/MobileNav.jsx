import { useState, useTransition } from 'react'
import { useNavigate } from 'react-router'
import '../styles/mobileNav.css'
import { navbarRef } from './NavBar.jsx'


let toggleMobileNav 

const MobileNav = () => {
    const [show, setShow] = useState(false)
    const [isPending, startTransition] = useTransition()
    const navigate = useNavigate()

    if(isPending){
      if(navbarRef){
        if(navbarRef.current){
            navbarRef.current.querySelector('.loading').classList.add('show')
        }
      }
    }else{
        if(navbarRef){
            if(navbarRef.current){
                navbarRef.current.querySelector('.loading').classList.remove('show')
            }
          }
    }

    toggleMobileNav = (state) => {
        setShow(state)
    }

    return (
        <div className={`mobile-nav ${ show? `show`: '' }`}>
             <div className="close" onClick={()=>{
                toggleMobileNav(false)
             }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                      </svg>
                </div>
                <ul>
                    <li><a onClick={()=>{
                            startTransition(()=>{
                                navigate('/')
                            })
                        }}>Home</a></li>
                    <li><a  onClick={()=>{
                            startTransition(()=>{
                                navigate('/services')
                            })
                        }}>Services</a></li>
                    <li><a onClick={()=>{
                            startTransition(()=>{
                                navigate('/account/me')
                            })
                        }}>Account</a></li>
                    <li> <a href='https://one.exnesstrack.net/a/yke3rzwi9i' target='default'>Broker</a></li>
                </ul>
        </div>
    )
}

export default MobileNav
export { toggleMobileNav }