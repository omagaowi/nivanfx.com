import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'
// import Home from "./pages/Home/Home.jsx"
import './styles/style.css'
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


let copyToClipboard


function App() {

  const [alert, setAlert]  = useState(false)

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
              {/* <Route path='/services/portfolio' element = { <Portfolio /> } /> */}
              <Route path='/services/mentorships' element = { <Mentorships />  } />
              <Route path='/services/signals' element = { <Signals /> } />
              <Route path='/contact' element = { <Contact /> } /> 
          </Routes>
        </Suspense>
        <HighAlerts />
    </BrowserRouter>    
  )
}

export default App
export { copyToClipboard }
