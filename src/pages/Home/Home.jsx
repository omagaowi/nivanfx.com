import { useEffect } from "react"
import BackgroundGrid from "../../components/BgGrid.jsx"
import NavBar from "../../components/NavBar.jsx"
import '../Home/home.css'
import HomeMain from "./HomeMain.jsx"

import { navAnimationsDesktop } from "../../animations/navAnimations.js"
import { runHomeAnimations } from "../../animations/homeAnimations.js"
import { heroRef } from "./HeroSection/HeroSection.jsx"
import MobileNav from "../../components/MobileNav.jsx"
const Home = () => {
    let rendered = false
    useEffect(()=>{
        if(!rendered){
            navAnimationsDesktop()
            runHomeAnimations(heroRef)
            rendered = true
        }
    }, [])
    return (
        <div className="container home-container">
            <NavBar white = { false }/>
            <MobileNav />
            <HomeMain />
        </div>
    )
}

export default Home