import FreeGudeImage from '../../assets/guide.jpg'
import Plans from '../../components/Plans/Plans.jsx'
import ServicesHero from '../../components/ServicesHero.jsx'
import ServicesImg from '../../assets/services.jpg'
import MentorshipImage from '../../assets/mentorship.png'
import { useRef } from 'react'

let freeGuideRef
let plansRef

const MentorshipsMain = () => {
    freeGuideRef = useRef(false)
    plansRef = useRef(false)
    const mentorshipData = {
        service: "MENTORSHIPS",
        heading: "Dive into Trading Mastery with Nivan FX Mentorship Programmes.",
    }
    return (
        <div className="mentorships-main">
            <ServicesHero data={ mentorshipData } image = { MentorshipImage }/>
            <div className="free-guide" ref={ freeGuideRef }>
                <div className="free-guide-bg">
                    <img src={ FreeGudeImage } alt="" loading='lazy'/>
                </div>
                <div className="free-guide-main">
                    <h1 className='no-opacity'>Nivan Fx Free Starters Guide!</h1>
                    <p className='no-opacity'>Ready to embark on your journey into the world of forex trading? Start with our comprehensive beginner's guide, designed to equip you with essential knowledge and strategies to navigate the markets with confidence. Get access to expert insights, practical tips, and valuable resources—all for free.</p>
                    <div className="buttons no-opacity">
                        <button><a href="/NivanFx Starters Guide.pdf" download>Download Guide</a></button>
                    </div>
                </div>
            </div>
            <div className="mentorship-plans" ref={ plansRef }>
                <div className="mentorship-plans-bg">
                    <img src={ ServicesImg } alt="" loading='lazy'/>
                </div>
                <div className="mentorship-plans-content" id='mentorship-plans-id'>
                            <div className="heading">
                                <h1 className='no-opacity'>Explore Our Plans</h1>
                                <div className="line remove"></div>
                            </div>
                            <Plans />
                </div>
            </div>
        </div>
    )
}

export default MentorshipsMain
export { freeGuideRef, plansRef }

