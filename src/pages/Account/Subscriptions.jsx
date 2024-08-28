import { useEffect, useState, useTransition, } from 'react'
import MentorshipImg from '../../assets/mentorship.png'
import SignalsImg from '../../assets/signal.png'
import { root, apiKeys, useAuthStore, fetchSubscription } from '../../utils/authStore.js'
import RoundLoader from '../../components/RoundLoader.jsx'
import { navbarRef } from '../../components/NavBar.jsx'
import Error from '../../components/Error.jsx'
import { useNavigate } from 'react-router'

const Subscriptions = () => {

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

    const [isPending, startTransition] = useTransition()
    const [data, setData] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [miniError, setMiniError] = useState(false)
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

    useEffect(() => {
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
                setError(prev => true)
                if(data.msg == 'Invalid Token'){
                    setAuthRedirect(false)
                    updateUser(false)
                    updateToken(false)
                    localStorage.removeItem('nivanUserData')
                    updateTokenError(true)
                }
            }
        }).catch((err) => {
            setLoading(prev => false)
            setError(true)
        })
    }, [])

    return (
        <div className="account-subscriptions">
             <Error error={ miniError ? true: false } status = { false } msg = { miniError } setError = { setMiniError }/>
            {
                loading? (
                    <RoundLoader />
                ): (
                    <>
                        {
                            error? (
                               <p>An Error Occured, Please try Again</p>
                            ):(
                                <>
                                     <div className="card" onClick={()=>{
                                        const subCode = data.mentorship? data.mentorship.subcription_code : false
                                        if(subCode){
                                            if(navbarRef){
                                                if(navbarRef.current){
                                                    navbarRef.current.querySelector('.loading').classList.add('show')
                                                }
                                            }
                                            fetchSubscription(subCode).then((data)=>{
                                                if(navbarRef){
                                                    if(navbarRef.current){
                                                        navbarRef.current.querySelector('.loading').classList.remove('show')
                                                    }
                                                }
                                                window.location.href = data.data.link
                                            }).catch((err)=>{
                                                setMiniError('An Error Occurred')
                                                if(navbarRef){
                                                    if(navbarRef.current){
                                                        navbarRef.current.querySelector('.loading').classList.remove('show')
                                                    }
                                                }
                                            })
                                        }else{
                                            startTransition(()=>{
                                               navigate(`/services/mentorships/#plans`)
                                            })
                                        }
                                     }}>
                                        <div className="card-bg">
                                            <img src={ MentorshipImg } alt="" />
                                        </div>
                                        <div className="card-stuff">
                                            <div className="card-text">
                                                <h2>Mentorships</h2>
                                                {
                                                    data.mentorship? (
                                                        <p>{ data.mentorship.plan }</p>
                                                    ):(
                                                        <p>No active subscription</p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card" onClick={()=>{
                                        const subCode = data.signals? data.signals.subcription_code : false
                                        if(subCode){
                                            if(navbarRef){
                                                if(navbarRef.current){
                                                    navbarRef.current.querySelector('.loading').classList.add('show')
                                                }
                                            }
                                            fetchSubscription(subCode).then((data)=>{
                                                if(navbarRef){
                                                    if(navbarRef.current){
                                                        navbarRef.current.querySelector('.loading').classList.remove('show')
                                                    }
                                                }
                                                window.location.href = data.data.link
                                            }).catch((err)=>{
                                                setMiniError('An Error Occurred')
                                                if(navbarRef){
                                                    if(navbarRef.current){
                                                        navbarRef.current.querySelector('.loading').classList.remove('show')
                                                    }
                                                }
                                            })
                                        }else{
                                            startTransition(()=>{
                                               navigate(`/services/signals#premuim_signals`)
                                            })
                                        }
                                    } }>
                                        <div className="card-bg">
                                            <img src={ SignalsImg } alt="" />
                                        </div>
                                        <div className="card-stuff">
                                            <div className="card-text">
                                                <h2>Signals</h2>
                                                {
                                                    data.signals? (
                                                        <p>Manage your subsctiption</p>
                                                    ):(
                                                        <p>No active subscription</p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

export default Subscriptions