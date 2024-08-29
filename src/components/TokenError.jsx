import { useAuthStore } from "../utils/authStore.js"
import { useNavigate } from "react-router"
import { useTransition } from "react"
import { navbarRef } from "./NavBar.jsx"


const TokenError = () => {
    const {tokenError, updateTokenError } = useAuthStore((state)=> ({
        updateTokenError: state.updateTokenError,
        tokenError: state.tokenError,
      }))
    const navigate = useNavigate()
    const [isPending, startTransition] = useTransition()


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
    return (
        <div className="token-error-bg">
            <div className="token-error-window">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                </svg>
                <h3>Your Session has expired!</h3>
                <p>You may have to re-login.</p>
                <button onClick={() => {
                    updateTokenError(false)
                    startTransition(()=>{
                        navigate('/account/login')
                    })
                }}>Login</button>
            </div>
        </div>
    )
}

export default TokenError