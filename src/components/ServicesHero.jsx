import { useRef } from "react"


let serviceHeroRef
import '../styles/serviceHero.css'

const ServicesHero = ({ data, image }) => {
    serviceHeroRef = useRef(false)
    return (
        <div className="service-hero-main" ref={ serviceHeroRef }>
            <div className="service-hero">
                <div className="part">
                    <div className="service-hero-text">
                        <p className="no-opacity">{data.service}</p>
                        <h1 className="no-opacity">{data.heading}</h1>
                    </div>
                </div>
                <div className="part">
                    <div className={`service-hero-image no-opacity ${ data.service == 'MENTORSHIPS' ? 'mentorship' : 'signal' }`}>
                        <img src={ image  } alt="" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHero

export {
    serviceHeroRef
}