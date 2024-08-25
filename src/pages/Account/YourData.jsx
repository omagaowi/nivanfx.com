import { useEffect, useRef, useState } from "react"
import fetchUserData from "../../utils/fetchUserData";
import { root, useAuthStore, apiKeys } from "../../utils/authStore.js";
import RoundLoader from "../../components/RoundLoader.jsx";
import { navbarRef } from "../../components/NavBar.jsx"
import Error from "../../components/Error.jsx"

const YourData = () => {

    const formRef = useRef(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [miniError, setMiniError] = useState(false)
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


    const [email, setEmail] = useState(user.email)
    const [status, setStatus] = useState(false)
    const [name, setName] = useState(user.name)
    const [phone, setPhone] = useState(user.phone)
    const [telegram, setTelegram] = useState(user.telegram)
    const [discord, setDiscord] = useState(user.discord)


    

    useEffect(() => {
        setLoading(prev => true)
        fetchUserData(token).then((data) => {
            setLoading(prev => false)
            if(data.status){
                updateUser(data.data)
            }else{
                setError(prev => true)
                if(data.msg == 'Invalid Token'){
                  updateUser(false)
                  updateToken(false)
                  setAuthRedirect(false)
                  localStorage.removeItem('nivanUserData')
                  updateTokenError(true)
                }
            }
        }).catch((err) => {
            console.log(err)    
            setLoading(prev => false)
            setError(prev => true)
        })
    }, [])

    const editData = async () => {
        try {
            const headers = {
                'x_api_key': apiKeys.api,
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
            const updates = {
                name: name,
                first_name: name.split(' ')[0],
                last_name: name.split(' ')[1],
                email: email,
                phone: phone,
                discord: discord,
                telegram: telegram,
                memberId: user.memberId
            }
            const response = await fetch(`${root}/auth/user/data/edit`, {
                headers: headers,
                method: 'PUT',
                body: JSON.stringify(updates)
            })
            const data = await response.json()
            return data
        } catch (error) {
            return error
        }
    }

    return (
        <div className="account-data">
             <Error error={ miniError ? true: false } status = { status } msg = { miniError } setError = { setMiniError }/>
            {
                loading? (  
                    <RoundLoader />
                ):(
                    !error? (
                        <form action=""  ref={ formRef } onSubmit={ (e) => {
                            e.preventDefault()
                            if(navbarRef){
                                if(navbarRef.current){
                                    navbarRef.current.querySelector('.loading').classList.add('show')
                                }
                            }
                            editData().then((data) => {
                                if(navbarRef){
                                    if(navbarRef.current){
                                        navbarRef.current.querySelector('.loading').classList.remove('show')
                                    }
                                }
                                if(data.status){
                                    updateUser(data.data)
                                    updateToken(data.token)
                                    localStorage.setItem('nivanUserData', JSON.stringify({token: data.token }))
                                    setMiniError(prev => 'Data Edited Successfully!')
                                    setStatus(prev => true)
                                }else{
                                    setStatus(prev => false)
                                    if(data.msg == 'Invalid Token'){
                                        updateUser(false)
                                        updateToken(false)
                                        setAuthRedirect(false)
                                        localStorage.removeItem('nivanUserData')
                                        updateTokenError(true)
                                    }else{
                                        setMiniError(prev => 'An error occurred!')
                                    }
                                }
                            }).catch((err)=>{
                                setMiniError(prev => 'An error occurred!')
                            })
                        } }>
                            <div className="input-field">
                                <h4>Full Name</h4>
                                <div className="inputs">
                                    <input type="text" name="full_name" id="name" value={ name } readOnly  onChange={ (e) => {
                                        setName(prev => e.target.value)
                                    } } onBlur={(e) => {
                                        e.target.setAttribute('readonly', 'readonly')
                                    }}/>
                                    <div className="edit-field"  onClick={ (e) => {
                                        if(formRef.current){
                                            const thisInput = formRef.current.querySelector('#name')
                                            thisInput.removeAttribute('readonly', 'readonly')
                                            thisInput.focus()
                                        }
                                    } }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="input-field">
                                <h4>Email</h4>
                                <div className="inputs">
                                    <input type="email" name="email" readOnly  value={ email } id="" onBlur={(e) => {
                                        e.target.setAttribute('readonly', 'readonly')
                                    }}/>
                                    <div className="edit-field" style={ { opacity: 0.4, pointerEvents: 'none' } }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="input-field">
                                <h4>Phone</h4>
                                <div className="inputs">
                                    <input type="text" name="phone" id="phone" readOnly value={ phone } onChange={ (e) => {
                                        setPhone(prev => e.target.value)
                                    } } onBlur={(e) => {
                                        e.target.setAttribute('readonly', 'readonly')
                                    }}/>
                                    <div className="edit-field"  onClick={ (e) => {
                                        if(formRef.current){
                                            const thisInput = formRef.current.querySelector('#phone')
                                            thisInput.removeAttribute('readonly', 'readonly')
                                            thisInput.focus()
                                        }
                                    } }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="input-field">
                                <h4>Telegram Username</h4>
                                <div className="inputs">
                                    <input type="text" name="telegram" id="telegram"  readOnly value={ telegram } onChange={ (e) => {
                                        setTelegram(prev => e.target.value)
                                    } } onBlur={(e) => {
                                        e.target.setAttribute('readonly', 'readonly')
                                    }}/>
                                    <div className="edit-field"  onClick={ (e) => {
                                        if(formRef.current){
                                            const thisInput = formRef.current.querySelector('#telegram')
                                            thisInput.removeAttribute('readonly', 'readonly')
                                            thisInput.focus()
                                        }
                                    } }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="input-field">
                                <h4>Discord GamerTag</h4>
                                <div className="inputs">
                                    <input type="text" name="discord"  readOnly value={ discord } id="discord" onChange={ (e) => {
                                        setDiscord  (prev => e.target.value)
                                    } } onBlur={(e) => {
                                        e.target.setAttribute('readonly', 'readonly')
                                    }}/>
                                    <div className="edit-field" onClick={ (e) => {
                                        if(formRef.current){
                                            const thisInput = formRef.current.querySelector('#discord')
                                            thisInput.removeAttribute('readonly', 'readonly')
                                            thisInput.focus()
                                        }
                                    } }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <button>
                                    Edit Data
                                </button>
                            </div>
                        </form>
                    ):(
                        <p>An Error Occured! Try again.</p>
                    )
                )
            }
        </div>
    )
}

export default YourData