import ServicesHero from "../../components/ServicesHero.jsx"
import SignalsImage from '../../assets/signals.jpg'
import Graphs from '../../assets/graphs.jpeg'
import FreeImage from '../../assets/free_signal.jpg'
import PaidImage from '../../assets/paid_signal.jpg'
import { useRef } from "react"

let freeSignalRef
let paidSignalRef
const SignalsMain = () => {
    freeSignalRef = useRef(false)
    paidSignalRef = useRef(false)


    const signalsData = {
        service: "SIGNALS",
        heading: "Unlock Profit Potential with Our Expert Trading Signals.",
    }
    return (
        <div className="signals-main">
            <ServicesHero data = { signalsData } image = { SignalsImage }/>
            <div className="free-section free" ref={ freeSignalRef }>
                <img src={ Graphs } alt="" className="bg" loading="lazy"/>
                <div className="free-section-content">
                   <div className="part">
                        <div className="free-section-image no-opacity">
                            <img src={ FreeImage } alt="" loading="lazy"/>
                        </div>
                   </div>
                   <div className="part">
                     <h3 className="no-opacity">FREE SIGNALS</h3>
                     <p className="no-opacity">Harness real-time insights and expert analysis to make informed decisions and maximize your trading success. Join our community today and start receiving free signals on our <b>Telgram</b> and <b>Discord</b> platfroms or gain more insights with our <a href="#premuim_signals">premuim signals</a>.</p>
                     <div className="buttons no-opacity">
                        <button>Join now</button>
                     </div>
                   </div>
                </div>
            </div>
              <div className="free-section paid" ref={ paidSignalRef } id="premuim_signals">
                <img src={ Graphs } alt="" className="bg" loading="lazy"/>
                <div className="free-section-content">
                   <div className="part">
                        <div className="free-section-image no-opacity">
                            <img src={ PaidImage } alt="" loading="lazy"/>
                        </div>
                   </div>
                   <div className="part">
                     <h3 className="no-opacity">PREMIUM SIGNALS</h3>
                     <p className="no-opacity">Access Premium Signals for Unparalleled Insights and Profitability. With Nivan FX's Premium Signals, get exclusive access to advanced analytics, expert recommendations, and precise market forecasts. Gain access to our pro trading signals at 50% discount of <b style={{color: "#8B00FF"}}>$15/mo</b>.</p>
                     <div className="buttons no-opacity">
                        <button onClick={()=> {
                            window.location.href = 'https://nivan-api.onrender.com/redirect/payment/signals'
                        }}>Join now</button>
                     </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default SignalsMain
export { freeSignalRef, paidSignalRef }