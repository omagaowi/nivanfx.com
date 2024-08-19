import './plans.css'

const Plans = () => {
    const plansArray = [
        {
            plan: "Intermediate",
            price_dollar: 25,
            price_naira: "50, 000",
            price_og : 50,
            features: [
                "Access to live training sessions with tutors (twice a week).",
                "Access to premium trading signals.",
                "Live market updates.",
                
            ],
            link: 'https://nivan-api.onrender.com/redirect/payment/intermediate'
        },
        {
            plan: "Profitable Trader",
            price_dollar: 50,
            price_naira: "100, 000",
            price_og : 100,
            features: [
                "Access to all intermediate features plus:",
                "Mastering fundamental analysis",
                "Access to tips to pass prop firm challenges",
                "Introduction to building psychology (weekly)"  
            ],
            link: 'https://nivan-api.onrender.com/redirect/payment/profitable'
        },
        {
            plan: "Exclusive",
            price_dollar: 100,
            price_naira: "200, 000",
            price_og : 200,
            features: [
                "Access to all profitable features plus:",
                "One on one with Nivan Fx.",
                "Q & A Sessions",
                "Pro level psyclogical build up (mind of a profitable trader).",
            ],
            link: 'https://nivan-api.onrender.com/redirect/payment/exclusive'
        }
    ]

    const Plan = ({plan}) => {
        return (
                <div className="plan no-opacity">
                    <div className="banner"></div>
                    <h2>{plan.plan}</h2>
                    <div className="price">
                        <div className="currency">
                            $
                        </div>
                        <div className="digit">
                            {plan.price_dollar}/mo
                        </div>
                    </div>
                    <div className="price-og">
                        <div className="currency">
                            $
                        </div>
                        <div className="digit">
                            {plan.price_og}/mo
                        </div>
                    </div>
                    <div className="features">
                        {
                            plan.features.map(feature => (
                                <div className="feature">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                                    </svg>
                                    <p className="feature-text">
                                       {feature}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={ (e) => {
                        window.location.href = plan.link
                    } }><a href={ plan.link }>Enroll Now</a></button>
                </div>
        )
    }

    return (
        <div className="plans" id='plans'>
           {
            plansArray.map(plan => (
                <Plan plan = { plan }/>
            ))
           }
        </div>
    )
}

export default Plans