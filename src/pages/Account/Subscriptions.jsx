import { useEffect, useState } from 'react'
import MentorshipImg from '../../assets/mentorship.png'
import SignalsImg from '../../assets/signal.png'
import { root, apiKeys, useAuthStore } from '../../utils/authStore'
import RoundLoader from '../../components/RoundLoader'


const Subscriptions = () => {

    const { token, user, updateToken, updateUser, tokenError, updateTokenError } = useAuthStore((state) => ({
        token: state.token,
        user: state.user,
        updateUser: state.updateUser,
        updateToken: state.updateToken,
        tokenError: state.tokenError,
        updateTokenError: state.updateTokenError
    }))


    const [data, setData] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

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
                                     <div className="card">
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
                                    <div className="card">
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