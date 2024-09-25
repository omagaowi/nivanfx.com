import './firstSection.css'
// import SectionImage from '../../../assets/section1.png'
import { useRef } from 'react'

let firstSectionRef

const FirstSection = () => {
     firstSectionRef = useRef(false)
    return (
        <div className="first-section" ref={ firstSectionRef }>
            <div className="part">
                <div className="image no-opacity">
                    <img src="/images/section1.webp" alt="" loading='lazy'/>
                </div>
            </div>
            <div className="part">
               <div className="section-content">
                    <h1 className='no-opacity'>We are The Market.</h1>
                    <p className='no-opacity'>We offer tailored mentorship, free/paid trading signals, real-life profitable traders, enriching e-books, and efficient portfolio management. Elevate your trading journey with our comprehensive suite of services.</p>
                    <div className="buttons  no-opacity">
                        <button onClick={()=>{
                            const elem = document.querySelector('#services-home')
                            if( window.location.href.split('/')[3] == ''){
                                if(elem){
                                    elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }
                        }}>Our Services</button>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default FirstSection

export { firstSectionRef }