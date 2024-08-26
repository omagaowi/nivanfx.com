import { useEffect, useState, useRef, useTransition } from 'react'
import './personalDetails.css'
import { apiKeys, root, useAuthStore } from '../../utils/authStore.js'
import NavBar from '../../components/NavBar.jsx'
import { navbarRef } from '../../components/NavBar.jsx'
import { navAnimationsDesktop } from '../../animations/navAnimations.js'
import { useNavigate } from 'react-router'
import Error from '../../components/Error.jsx'
import MobileNav from '../../components/MobileNav.jsx'


const PersonalDetailsPage = () => {
    const {user, updateUser} = useAuthStore((state) => ({
        updateUser: state.updateUser,
        user: state.user,
    }))

    console.log(user)


    const [showTelBg, setShowTelBg] = useState(false)
    const [headingSearch, setHeadingSearch] = useState(false)
    const [countryList, setCountryList] = useState([])
    const [searchText, setSearchText] = useState('')
    const telRef = useRef(false)
    const searchRef = useRef(false)
    const [selectedCountry, setSelectedCountry] = useState({
        code: 'NG',
        name: 'Nigeria',
        dial_code: '+234'
    })
    const [error, setError] = useState(false)

    const [isPending, startTransition] = useTransition()
    const navigate = useNavigate()
    const [countryLoading, setCountryLoading] = useState(false)
    
    const formData = JSON.parse(sessionStorage.getItem('formData'))

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


      const handleInputChange = (event) => {
        setSearchText(event.target.value);
      };


    if(telRef.current){
        telRef.current.addEventListener('blur', (e)=>{
            const telValue = e.target.value
            countryList.forEach(country => {
                if(telValue.startsWith(country.dial_code)){
                    setSelectedCountry(prev => country)
                }
            })
        })
    }


    const fetchCountryCodes = () => {
        setCountryLoading(prev => true)
        fetch(`${root}/getCountryCode`).then((response) => {
            return response.json()
        }).then((data) => {
            // console.log(data)
            setCountryList(prev => data)
            setCountryLoading(prev => false)
        }).catch(err => {
            setCountryLoading(prev => false)
            setCountryList(prev => 'error')
        })
    }

    useEffect(() => {
        let rendered = false
        if(telRef){
            telRef.current.value = selectedCountry.dial_code
        }
        fetchCountryCodes()
        if(!JSON.parse(sessionStorage.getItem('formData'))){
            navigate('/account/login')
        }else{
            if(!JSON.parse(sessionStorage.getItem('formData')).isVerified){
                navigate('/account/verify')
            }
        }
        if(!rendered){
            navAnimationsDesktop()
            rendered = true
        }
    }, [])


    const noUsername = (telegram, discord) => {
        if(telegram != '' || discord != ''){
            return true;
        }else if(telegram != '' && discord != ''){
            return true;
        }else{
            return false;
        }
    }

    const signupUser = async (e) => {
        const body = {
            name: e.target.full_name.value,
            first_name: e.target.full_name.value.split(' ')[0],
            last_name: e.target.full_name.value.split(' ')[1],
            email: formData.email,
            phone: e.target.number.value,
            telegram: e.target.telegram.value,
            discord: e.target.discord.value,
            country: selectedCountry.name
          };
          try{
            const url = `${root}/auth/signup`
            const headers = {
              'x_api_key': apiKeys.api,
              'Content-Type': 'application/json'
            }
            const response = await fetch(url, {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(body)
            })
            const data = await response.json()
            return data
          }catch(err){
            throw err
          }
    }

    const submitForm = (e) => {
        const full_name = e.target.full_name.value
        const tel = e.target.number.value
        const telegram = e.target.telegram.value
        const discord = e.target.discord.value
        if(full_name != '' && tel != ''){
            if(noUsername(telegram, discord)){
                navbarRef.current.querySelector('.loading').classList.add('show')
                signupUser(e).then((data) => {
                    if(data.data){
                        localStorage.setItem('nivanUserData', JSON.stringify({
                            token: data.data.token
                        }))
                        updateUser(data.data)
                        sessionStorage.removeItem('formData')
                        if(formData.redirect){
                            startTransition(()=>{
                                navigate(formData.redirect)
                                
                            })
                        }else{
                            startTransition(()=>{
                                navigate(`/account/me`)
                            })
                        }
                    }else{
                        setError(prev => 'An Error Occured')
                    }
                    navbarRef.current.querySelector('.loading').classList.remove('show')
                }).catch((err) => {
                    console.log(err)
                    navbarRef.current.querySelector('.loading').classList.remove('show')
                    setError(prev => 'An Error Occured')
                })
            }else{
                setError(prev => 'At least one of discord or telegram required')
            }
        }else{
            setError(prev => 'Required Field Missing')
        }
    }

    console.log(countryList)

    return (
        <div className="personal-details-container container">
            <NavBar white={ true }/>
            <MobileNav />
            <Error error={ error ? true: false } msg = { error } setError = { setError }/>
             {/* <img src="/images/bg.jpg" alt="" loading="lazy" class="bg" /> */}
            <div className="main">
                <div className="form-box">
                    <div className="error-msg">
                        <p>An Error Occured!!</p>
                    </div>
                    <img src="/mini_logo.png" alt="" className="logo" />
                    <h2>Almost There !!</h2>
                    <p className="plan-text">Fill in the last of the remaining fields</p>
                    <form action="" onSubmit={ (e) => {
                        e.preventDefault()
                        submitForm(e)
                    } }>
                        <label for="">
                            <input type="text" placeholder="Full Name"  name="full_name" />
                        </label>
                        <label for="" className="phone">
                            <div className="tel-drop" onClick={ () => {
                                setShowTelBg(true)
                                 searchRef.current.value = ''
                                 setSearchText(prev => '')
                            } }>
                                <p className="country-code">
                                    {
                                        selectedCountry.code
                                    }
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                            <input type="text" placeholder="Phone Number (optional)" name="number" ref={ telRef }/>
                        </label>
                        <label for="">
                            <input type="text" placeholder="Telegram Username (optional)" name="telegram"/>
                        </label>
                        <label for="">
                            <input type="text" placeholder="Discord Gamertag" name="discord" />
                        </label>
                        <button type="submit" className="submit-btn">
                            Sign up
                            <div className="loading">
                                <img src="/images/loader.gif" alt="" />
                            </div>
                        </button>
                    </form>
                    <div className={ `tel-bg ${showTelBg? 'show': ''}` }>
                        <div className={`tel-window ${countryLoading? 'loading' : ''}`}>
                            <div className="load">
                                <div className="loader"></div>
                            </div>
                            <div className={`heading ${ headingSearch? 'search': '' }`}>
                                <div className="back-icon" onClick={() => {
                                    if(headingSearch){
                                        setHeadingSearch(prev => false)
                                    }else{
                                        setShowTelBg(prev => false)
                                    }
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                                    </svg>
                                </div>
                                <h3>Choose a Country</h3>
                                <div className="search-icon" onClick={() => {
                                    setHeadingSearch(true)
                                    searchRef.current.focus()
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                    </svg>
                                </div>
                                <input type="text" className="search-country" placeholder="Search" onChange={ handleInputChange } ref={ searchRef }/>
                            </div>
                            <div className="all-countries">
                                <div className="countries-overflow">
                                    {
                                        <>
                                            {
                                                countryList != 'error'? (
                                                    <>
                                                        {
                                                            countryList.length > 0? (
                                                                <>
                                                                    {
                                                                        countryList.filter((country) =>
                                                                            country.name.toLowerCase().includes(searchText.toLowerCase()) || country.code.toLowerCase().includes(searchText.toLowerCase())
                                                                          ).map(country => (
                                                                            <div className="country-item" onClick={ () => {
                                                                                setSelectedCountry(prev => country)
                                                                                telRef.current.value = country.dial_code
                                                                                setHeadingSearch(false)
                                                                                setShowTelBg(false)
                                                                            } }>
                                                                                <div className="country-name">
                                                                                    {country.name}
                                                                                </div>
                                                                                <div className="phone-code">
                                                                                    {country.dial_code}
                                                                                </div>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </>
                                                            ):(
                                                                <></>
                                                            )
                                                        }
                                                    </>
                                                ):(
                                                    <span>Error!! <p onClick={() => {
                                                        fetchCountryCodes()
                                                    }}>Retry</p></span>
                                                )
                                            }
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PersonalDetailsPage 