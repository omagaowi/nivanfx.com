import { useEffect, useState } from 'react'
import { useAuthStore, root, apiKeys } from "../../utils/authStore";
import { Helmet } from 'react-helmet';
import './verify.css'



const VerifyPayment = () => {

    const [ref, setRef] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(false)

 

    const { token, updateToken, user, updateUser, tokenError, updateTokenError } = useAuthStore((state)=> ({
        token: state.token,
        updateToken: state.updateToken,
        updateTokenError: state.updateTokenError,
        tokenError: state.tokenError,
        user: state.user,
        updateUser: state.updateUser,
      }))

    const verify = async (payRef) => {
        try {
            const headers = {
                'x_api_key': apiKeys.api,
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('nivanUserData')).token}`,
              }
                const response = await fetch(`${root}/verify/${window.location.href.split('=')[2]}`, {
                    headers: headers,
                    method: 'GET'
                })
                const data = await response.json()
                return data
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        setLoading(prev => true)
        setRef(prev => window.location.href.split('=')[2]? window.location.href.split('=')[2] : '#invalid' )
        verify(window.location.href.split('=')[2]).then((data)=>{
            if(data.status){
                setLoading(prev => false)
                setError(prev => false)
                setData(prev => data)
            }else{
                setLoading(prev => false)
                setData(prev => false)
 
                if(data.msg == 'Invalid Token'){
                    setError(prev => 'Unauthorized user!')
                    updateUser(false)
                    updateToken(false)
                    localStorage.removeItem('nivanUserData')
                    updateTokenError(prev => true)
                }else{
                    setError(prev => 'An Error Occured!')
                }
            }
        }).catch((error) =>{
            setLoading(prev => false)
            setError(prev => 'Check your internet connection and try again!')
            setData(prev => false)
        })
    }, [])

    return (
        <>
             <Helmet>
             <script async src="https://www.googletagmanager.com/gtag/js?id=G-4DX1JHEVR8"></script>
                <script>{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-4DX1JHEVR8');
                `}</script>
                <title>Verify your Payment | Nivan FX</title>
                <meta name="google-site-verification" content="FGBWXtAisFxV7yCU1EgR7ozrntCKPJccWCr2GhnJq0M" />
                <meta name="description" content="Congratulations on completing your payment, Please verify your transaction here!"/>
                <meta name="keywords" content="Nivan Fx, Forex trading, Forex education, trading signals, Forex mentorship, Nivan FX, paid signals, free signals, trading programs, Forex growth, trading mentorships" />
                <link rel="canonical" href="https://www.nivanfx.com/services/mentorships" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            </Helmet>
            <div className="container verify-container valid">
            {
                loading ? (
                    <div className="loader">
                            <div className="loading">
                                <div className="bar"></div>
                            </div>
                            <p>Verifying your transaction...</p>
                    </div>
                ): (
                    <>
                        <div className="main-box">
                            {
                                data? (
                                    <div className="success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                            </svg>
                                            <h1>Congratulations</h1>
                                            <p>Welcome to the NivanFx Premuim Commumity.</p>
                                            <div className="note">
                                                <h4>NOTE!!</h4>
                                                <ul>
                                                    {
                                                        data.data.plan.notes.map((note) => (
                                                            <li dangerouslySetInnerHTML={{ __html: note }}></li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div className="link-banner">
                                                <a href={ data.data.plan.telegram }>{ data.data.plan.telegram }</a>
                                                <div className="copy">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                    </div>
                                ):(
                                    <div className="invalid">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                                                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
                                                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                                                </svg>
                                                <h1>Couldn't Verify Transaction</h1>
                                                <p className="error-msg">{ error }</p>
                                                <button className="retry-btn" onClick={() => {
                                                    setLoading(prev => true)
                                                     verify().then((data)=>{
                                                        if(data.status){
                                                            setLoading(prev => false)
                                                            setError(prev => false)
                                                            setData(prev => data)
                                                        }else{
                                                            setLoading(prev => false)
                                                            setData(prev => false)
 
                                                            if(data.msg == 'Invalid Token'){
                                                                setError(prev => 'Unauthorized user!')
                                                                updateUser(false)
                                                                updateToken(false)
                                                                localStorage.removeItem('nivanUserData')
                                                                updateTokenError(prev => true)
                                                            }else{
                                                                setError(prev => 'An Error Occured!')
                                                            }
                                                        }
                                                    }).catch((error) =>{
                                                        setLoading(prev => false)
                                                        setError(prev => 'Check your internet connection and try again!')
                                                        setData(prev => false)
                                                    })
                                                }}>Retry</button>
                                        </div>
                                )
                            }
                        </div>
                    </>
                )
            }
        </div>
        </>
    )
}

export default VerifyPayment