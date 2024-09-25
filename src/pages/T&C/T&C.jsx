import '../T&C/t&c.css'
import NavBar from '../../components/NavBar.jsx'
import { useEffect, useState } from 'react'
import { navbarRef } from '../../components/NavBar.jsx'
import { navAnimationsDesktop } from '../../animations/navAnimations.js'
import { useNavigate } from 'react-router'

const TermsConditionsPage = () => {
    let rendered = false
    const [remove, setRemove] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!rendered){
            navAnimationsDesktop()
            rendered = true
        }
        setTimeout(() => {
            setRemove(prev => true)
        }, 3000);
    }, [])
    return (
        <div className="terms-conditions-container container">
            <div className="terms-conditions-main">
                 <NavBar white={ true }/>
                <div className="terms-conditions-window">
                    <div className={`reminder ${remove? 'remove' : ''}`}>
                        <p>Please read and accept our terms of service to continue!</p>
                    </div>
                    <img src="/images/mini_logo.webp" alt="" />
                    <h1>Terms of Service</h1>
                    <div className="section">
                        <h3>Privacy Policy</h3>
                        <div className="sub-section">
                            <h4>Infomation collection</h4>
                            <ul>
                                <li>
                                    <p>
                                    At nivanfx, we are committed to protecting the privacy and security of our customers' personal information. This privacy policy outlines how we collect, use, and safeguard the data we	ress, phone number, and financial details when you open a trading account with us or use our services
                                    </p>
                                    <p className="reason">
                                        <b>Reason:</b>
                                        We collect personal and non-personal information to provide you with our trading services, process your transactions, and improve our platform. This data helps us better understand your needs and deliver a more tailored experience.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h4>Use of Infomation</h4>
                            <ul>
                                <li>
                                    <p>
                                     We use the collected information to process your account transactions, provide customer support, improve our services, and comply with legal and regulatory requirements.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    We may share your information with trusted third-party service providers who assist us in operating our business, but we do not sell or rent your personal data to any third parties.
                                    </p>
                                    <p className="reason">
                                        <b>Reason:</b>
                                        We use your information to facilitate your account activities, offer customer support, and comply with relevant laws and regulations. Sharing data with trusted third-party providers enables us to enhance our services.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h4>Data Security</h4>
                            <ul>
                                <li>
                                    <p>
                                    We implement industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    Your financial and sensitive data is stored and transmitted using encryption technologies to ensure its confidentiality and integrity.
                                    </p>
                                    <p className="reason">
                                        <b>Reason:</b>
                                        Protecting the confidentiality and integrity of your sensitive information is a top priority. We implement robust security measures to safeguard your data from unauthorized access or misuse.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="section">
                        <h3>Terms and Conditions</h3>
                        <div className="sub-section">
                            <h4>Account Opening and Eligibility</h4>
                            <ul>
                                <li>
                                    <p>
                                    By opening a trading account with nivanfx, you acknowledge that you are solely responsible for your trading activities and the outcomes thereof.
                                    </p>
                                    <p className="reason">
                                        <b>Reason:</b>
                                        We have these requirements to ensure compliance with legal and regulatory standards, as well as to protect the integrity of our platform and all our clients.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h4>Trading Services and Risks</h4>
                            <ul>
                                <li>
                                    <p>
                                    Trading these products carries a high level of risk and may not be suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk tolerance before engaging in any trading activities. You are fully responsible for evaluating the risks and making your own trading decisions.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    We may share your information with trusted third-party service providers who assist us in operating our business, but we do not sell or rent your personal data to any third parties.
                                    </p>
                                    <p className="reason">
                                        <b>Reason:</b>
                                        We use your information to facilitate your account activities, offer customer support, and comply with relevant laws and regulations. Sharing data with trusted third-party providers enables us to enhance our services.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h4>Client Funds and Account Management</h4>
                            <ul>
                                <li>
                                    <p>
                                    All client funds are held in segregated bank accounts and are protected in accordance with applicable regulations.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    You are responsible for monitoring your account balance, open positions, and trading activities
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    You are solely responsible for monitoring your account balance, open positions, and trading activities. nivanfx is not liable for any losses or damages resulting from your account management decisions.
                                    </p>
                                    <p className="reason">
                                        <b>Reason:</b>
                                        Segregating client funds and providing you with the tools to monitor your account helps ensure the safety and integrity of your investments with us.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h4>Order Execution and Slippage</h4>
                            <ul>
                                <li>
                                    <p>
                                    nivanfx will execute your orders to the best of its ability, but we cannot guarantee the exact execution price due to market conditions and other factors.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    Slippage, the difference between the expected price and the actual execution price, may occur, and you accept this risk.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    You accept the risk of slippage and understand that nivanfx cannot guarantee the exact execution price. You are responsible for the consequences of any orders you place.
                                    </p>
                                    <p className="reason">
                                        <b>Reason:</b>
                                        While we strive for the best possible execution, market conditions can sometimes lead to slippage, which is a difference between the expected and actual execution price. We want you to be aware of this possibility.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h4>Fees and Charges</h4>
                            <ul>
                                <li>
                                    <p>
                                    nivanfx charges fees and commissions for its services, as outlined in our fee schedule, which may be subject to change.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    You are responsible for any applicable taxes, levies, or other charges related to your trading activities.
                                    </p>
                                    <p className="reason">
                                        <b>Reason:</b>
                                        We charge fees and commissions for our services, and it's important that you understand these costs upfront. You are also responsible for any applicable taxes or other charges related to your trading activities.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h4>Governing Law and Dispute Resolution</h4>
                            <ul>
                                <li>
                                    <p>
                                    These terms and conditions are governed by the laws of [relevant jurisdiction].
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    Any disputes arising from your use of our services will be resolved through binding arbitration or the relevant courts.
                                    </p>
                                    <p className="reason">
                                        <b>Reason:</b>
                                        Specifying the governing law and dispute resolution process helps ensure a fair and transparent framework for addressing any issues that may arise.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h4>Limitation of Liability</h4>
                            <ul>
                                <li>
                                    <p>
                                     nivanfx shall not be liable for any losses, damages, or costs incurred by you as a result of your trading activities or use of our services, except in cases of gross negligence or willful misconduct by nivanfx. You agree to indemnify and hold nivanfx harmless from any claims, damages, or expenses arising from your trading activities
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={() => {
                            const redirectLink = window.location.href.split('=')[1]
                            if(redirectLink != 'false' && redirectLink.startsWith('https://checkout.paystack.com')){
                                window.location.href = redirectLink
                            }
                        }}>Accept</button>
                        <button onClick={() => {
                            navigate(-1);
                        }}>Reject</button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default TermsConditionsPage