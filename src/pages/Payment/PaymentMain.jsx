import { useEffect, useState, useTransition } from "react";
import { useAuthStore, root, apiKeys, fetchSubscription } from "../../utils/authStore.js";
import { navbarRef } from "../../components/NavBar.jsx";
import Error from "../../components/Error.jsx"
import RoundLoader from "../../components/RoundLoader.jsx"
import { useNavigate } from "react-router"


const PaymentMain = () => {
    const [plan, setPlan] = useState(false)
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


    const { token, user, updateToken, updateUser, authRedirect, setAuthRedirect, tokenError, updateTokenError } = useAuthStore((state) => ({
        token: state.token,
        user: state.user,
        updateUser: state.updateUser,
        updateToken: state.updateToken,
        tokenError: state.tokenError,
        updateTokenError: state.updateTokenError,
        authRedirect: state.authRedirect,
        setAuthRedirect: state.setAuthRedirect
    }))


    const plans = [
        {
          planCode: "PLN_cu7k3ly30mwip4g",
          plan: "Tier 1",
          type: "mentorship",
        },
        {
          planCode: "PLN_w9fggz2ezfe44u9",
          plan: "Tier 2",
          type: "mentorship",
        },
        {
          planCode: "PLN_omp4zkk597lbobe",
          plan: "Tier 3",
          type: "mentorship",
        },
        {
          planCode: "PLN_d87553b9gq8mhde",
          plan: "Premium Signals",
          type: "signal",
        },
      ];

      const [error, setError] = useState(false)
      const [data, setData] = useState(false)
      const [loading, setLoading] = useState(false)
      const [miniError, setMiniError] = useState(false)

      const fetchSubs = (code) => {
        setLoading(prev => true)
        const headers = {
            'x_api_key': apiKeys.api,
            'Authorization': `Bearer ${token}`,
          }
        fetch(`${root}/auth/user/subcriptions`, {
            method: 'GET',
            headers: headers,
        }).then((response) => {
           return response.json()   
        }).then((data) => {
            setLoading(prev => false)
 
            if(data.status){
                setData(data.data)
            }else{
                setData(false)
                setError(prev => true)
                if(data.msg == 'Invalid Token'){
                    updateUser(false)
                    setAuthRedirect(`/account/payment/${code}`)
                    updateToken(false)
                    localStorage.removeItem('nivanUserData')
                    updateTokenError(true)
                }
            }
        }).catch((err) => {
 
            setLoading(prev => false)
            setError(true)
        })
      }

 

      const processTransaction = async () => {
        const headers = {
            'x_api_key': apiKeys.api,
            'Authorization': `Bearer ${token}`,
          }
        try {
            const response = await fetch(`${root}/submit/payment/${plan.planCode}`, {
                headers: headers,
                method: 'GET'
            })
            const data = await response.json()
 
            return data
        } catch (error) {
            throw error;
        }
    }

    const ExistingSubscription = ({ sub }) => {
        return (
        <>
            <h2>Existing subscription detected</h2>
            <p>To subscribe to this service cancel your current valid { sub.plan } subscription</p>
            <button onClick={()=>{
                if(navbarRef.current){
                    navbarRef.current.querySelector('.loading').classList.add('show')
                }
                fetchSubscription(data.mentorship.subcription_code).then((data)=>{
                    if(navbarRef){
                        if(navbarRef.current){
                            navbarRef.current.querySelector('.loading').classList.remove('show')
                        }
                    }
                    window.location.href = data.data.link
                }).catch(err => {
                    if(navbarRef){
                        if(navbarRef.current){
                            navbarRef.current.querySelector('.loading').classList.remove('show')
                        }
                    }
                   setMiniError('An Error Occurred!')
                })
            }}>Cancel</button>
        </>
        )
    }

    const NonExisting = () => {
        return (
            <>
                <h2>{ plan.plan }</h2>
                <p>Subscribe to this service as <b>{ user.email }</b></p>
                <button onClick={()=>{
                    if(navbarRef.current){
                        navbarRef.current.querySelector('.loading').classList.add('show')
                    }  
                    processTransaction().then((data)=>{
                        if(navbarRef.current){
                            navbarRef.current.querySelector('.loading').classList.remove('show')
                        }  
                    if(data.status){
                        startTransition(()=>{
                            navigate(`/account/terms_and_conditions/?redirect=${data.data.authorization_url}`)
                        })
                    }else{
                        if(data.msg == 'Invalid Token'){
                            updateUser(false)
                            updateToken(false)
                            localStorage.removeItem('nivanUserData')
                            updateTokenError(true)
                            setAuthRedirect(`/account/payment/${plan.code}`)
                        }else{
                            setMiniError('An Error Occured!')
                        }
                    }   
                    }).catch((error) => {
                        setMiniError('An Error Occured!')
                        if(navbarRef.current){
                            navbarRef.current.querySelector('.loading').classList.remove('show')
                        } 
                    })
                }}>Confirm </button>
            </>
        )
    }

      useEffect(()=>{
        const planCode = window.location.href.split('/')[5]
        fetchSubs(planCode)
        setPlan(plans.filter(function(el){
            return el.planCode == planCode
        })[0])
      }, [])
    return (
        <div className="payment-page-main">
            <Error error={ miniError ? true: false } msg = { miniError } setError = { setMiniError }/>
            {
                loading? (
                    <RoundLoader />
                ):(
                    <div className="payment-confirm-window">
                        <img src={ `/images/mini_logo.webp` } alt="" />
                        {
                            data && plan? (
                                <>
                                    {
                                      plan.type == 'mentorship'? (
                                        data.mentorship && data.mentorship.valid && data.mentorship.status == 'renew'? (
                                            <ExistingSubscription sub = { data.mentorship }/>
                                        ):(
                                            <NonExisting />
                                        )
                                      ):(
                                        data.signals && data.signals.valid && data.signals.status == 'renew'? (
                                            <ExistingSubscription sub = { data.signals }/>
                                        ):(
                                            <NonExisting />
                                        )
                                      )
                                    }
                                </>
                            ):(
                                <p>An Error Occuued. Check your connection and try again!</p>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default PaymentMain