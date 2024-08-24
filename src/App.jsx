import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Suspense, lazy, useEffect, useState } from 'react'
// import Home from "./pages/Home/Home.jsx"
import './styles/style.css'
import fetchUserData from './utils/fetchUserData.js'
// // import Portfolio from './pages/Portfolio/Portfolio.jsx'
// import Mentorships from './pages/Mentorships/Mentorsips.jsx'
// import Signals from './pages/Signals/Signals.jsx'
// import Contact from './pages/Contact/Contact.jsx'
// import ServicesPage from './pages/Services/ServicesPage.jsx'

const Home = lazy(() => import('./pages/Home/Home.jsx'))
const Mentorships = lazy(() => import('./pages/Mentorships/Mentorsips.jsx'))
const Signals = lazy(() => import('./pages/Signals/Signals.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))
const ServicesPage  = lazy(()=> import('./pages/Services/ServicesPage.jsx'))
const Account  = lazy(()=> import('./pages/Account/Account.jsx'))
const LoginPage  = lazy(()=> import('./pages/Login/Login.jsx'))
const VerifyOTPPage  = lazy(()=> import('./pages/Login/VerifyOTP.jsx'))
const PersonalDetialsPage  = lazy(()=> import('./pages/Login/PersonalDetails.jsx'))
const PaymentPage  = lazy(()=> import('./pages/Payment/Payment.jsx'))
const VerifyPayment  = lazy(()=> import('./pages/Payment/VerifyPayment.jsx'))
const TermsConditionsPage  = lazy(()=> import('./pages/T&C/T&C.jsx'))

import { useAuthStore } from './utils/authStore.js'
import TokenError from './components/TokenError.jsx'

let copyToClipboard


function App() {

  const [alert, setAlert]  = useState(false)

  const { token, updateToken, user, updateUser, tokenError, updateTokenError } = useAuthStore((state)=> ({
    token: state.token,
    updateToken: state.updateToken,
    updateTokenError: state.updateTokenError,
    tokenError: state.tokenError,
    user: state.user,
    updateUser: state.updateUser,
  }))


  copyToClipboard = (text)  => {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Copying to clipboard was successful!');
        setAlert('Copied to Clipboard')
        setTimeout(()=>{
          setAlert(false)
        }, 1000)
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
  }

  const HighAlerts = () => {
    return (
      <div className={`high-alerts ${alert? `show`: ''}`}>
        <h1>Copied to Clipboard !</h1>
      </div>
    )
  }

  useEffect(()=> {
    if(token){
      fetchUserData(token).then((data)=>{
        console.log(data)
        if(data.status){
          updateUser(data.data)
        }else{
          updateUser(false)
          updateToken(false)
          localStorage.removeItem('nivanUserData')
        }
      }).catch(err => {
          updateUser(false)
          updateToken(false)
          localStorage.removeItem('nivanUserData')
      })
    }
  },[])
  

  return (
    <BrowserRouter >
        <Suspense fallback = {<div class="full-screen-loader">
          <div className="loading show">
            <div className="loader"></div>
          </div>
      </div>}>
          <Routes>
              <Route exact path='/' element={ <Home /> } />
              <Route path='/services' element = { <ServicesPage /> } />

              <Route path='/account/me' element ={ token ? <Account /> : <Navigate to={'/account/login' } />  } />
              <Route path='/account/login' element = { <LoginPage /> } />
              <Route path='/account/verify' element = { <VerifyOTPPage />  } />
              <Route path='/account/personaldetails' element = { <PersonalDetialsPage />  } />

              <Route path='/account/payment/:plan' element ={ token ? <PaymentPage /> : <Navigate to={'/account/login' } />  } />

              <Route path='/payment/verify' element = { <VerifyPayment />  } />
              <Route path='/account/terms_and_conditions/' element ={ token ? <TermsConditionsPage /> : <Navigate to={'/account/login' } />  } />

              {/* <Route path='/services/portfolio' element = { <Portfolio /> } /> */}
              <Route path='/services/mentorships' element = { <Mentorships />  } />
              <Route path='/services/signals' element = { <Signals /> } />
              <Route path='/contact' element = { <Contact /> } /> 
          </Routes>
        </Suspense>
        <HighAlerts />
        {
          tokenError? (
             <TokenError /> 
          ): (
            <></>
          )
        }
    </BrowserRouter>    
  )
}

export default App
export { copyToClipboard }
