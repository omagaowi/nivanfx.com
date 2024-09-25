import ServicesHero from "../../components/ServicesHero.jsx"
// import SignalsImage from '../../assets/signals.jpg'
// import Graphs from '../../assets/graphs.jpeg'
// import FreeImage from '../../assets/free_signal.jpg'
// import PaidImage from '../../assets/paid_signal.jpg'
import { useRef, useTransition, useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { navbarRef } from "../../components/NavBar.jsx"
import CountdownMain from "../Countdown/CountdownMain.jsx"

let freeSignalRef
let paidSignalRef
const SignalsMain = () => {
    freeSignalRef = useRef(false)
    paidSignalRef = useRef(false)

    const navigate = useNavigate()
    const [isPending, startTransition] = useTransition()
    const [isTime, setIsTime] = useState(new Date("September 23, 2024 00:00:00").getTime() - new Date().getTime() > 0? false : true)

    const signalsData = {
        service: "SIGNALS",
        heading: "Unlock Profit Potential with Our Expert Trading Signals.",
    }

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

    useEffect(()=>{
        setIsTime(new Date("September 23, 2024 00:00:00").getTime() - new Date().getTime() > 0? false : true)
    })

    return (
        <div className="signals-main">
            <ServicesHero data = { signalsData } image = { '/images/signals.webp' }/>
            {/* <CountdownMain /> */}
            <div className="free-section free" ref={ freeSignalRef }>
                <img src='/images/graphs.webp' alt="" className="bg" loading="lazy"/>
                <div className="free-section-content">
                   <div className="part">
                        <div className="free-section-image no-opacity">
                        <img src='/images/free_signal.webp' alt="" loading="lazy"/>
                        </div>
                   </div>
                   <div className="part">
                     <h3 className="no-opacity">FREE SIGNALS</h3>
                     <p className="no-opacity">Harness real-time insights and expert analysis to make informed decisions and maximize your trading success. Join our community today and start receiving free signals on our <b>Telgram</b> and <b>Discord</b> platfroms or gain more insights with our <a href="#premuim_signals">premuim signals</a>.</p>
                     <div className="buttons no-opacity"> 
                        <button onClick={(e) => {
                            window.location.href = 'https://t.me/Nivan_fxcommunity'
                        }}>Join now</button>
                     </div>
                   </div>
                </div>
            </div>
              <div className="free-section paid" ref={ paidSignalRef } id="premuim_signals">
                <img src='/images/graphs.webp' alt="" className="bg" loading="lazy"/>
                <div className="free-section-content">
                   <div className="part">
                        <div className="free-section-image no-opacity">
                            <img src='/images/paid_signal.webp' alt="" loading="lazy"/>
                        </div>
                   </div>
                   <div className="part">
                     <h3 className="no-opacity">PREMIUM SIGNALS</h3>
                     <p className="no-opacity">Access Premium Signals for Unparalleled Insights and Profitability. With Nivan FX's Premium Signals, get exclusive access to advanced analytics, expert recommendations, and precise market forecasts. Gain access to our pro trading signals at 50% discount of <b style={{color: "#8B00FF"}}>$15/mo</b>.</p>
                     <div className="buttons no-opacity">
                        {
                            isTime? (
                                <button onClick={ () => {
                                    startTransition(()=>{
                                       navigate(`/account/payment/PLN_d87553b9gq8mhde`)
                                   })
                               } }>Join Now</button>
                            ):(
                                <button style={ { cursor: 'not-allowed', width: '120px' } }>Launching Soon!</button>
                            )
                        }
                     </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default SignalsMain
export { freeSignalRef, paidSignalRef }