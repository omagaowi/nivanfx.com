import { useState } from "react"
import Subscriptions from "./Subscriptions.jsx"
import YourData from "./YourData.jsx"
import { useAuthStore } from "../../utils/authStore.js"

const AccountMain = () => {

    const [active, setActive] = useState('subs')

    const { user } = useAuthStore((state) => ({
        user: state.user
    }))

    return (
        <div className="account-main">
            <div className="title">
                <h1>Hello { user.first_name }</h1>
            </div>
            <div className="account-nav">
                <div className="account-nav-overflow">
                    <div className={`nav-button ${active == 'subs'? 'active' : ''}`} onClick={ () => {
                        setActive(prev => 'subs')
                    } }>
                        <p>Subscriptions</p>
                    </div>
                    <div className={`nav-button ${active == 'data'? 'active' : ''}`} onClick={ () => {
                        setActive(prev => 'data')
                    } }>
                        <p>Your Data</p>
                    </div>
                </div>
            </div>
            {
                active == 'subs'? (
                    <Subscriptions />
                ):(
                    <YourData />
                )
            }
        </div>
    )
}

export default AccountMain