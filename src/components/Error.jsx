import { useEffect, useState } from 'react'
import '../styles/error.css'

const Error = ({ error, msg, status, setError }) => {
 
    useEffect(() => {
        if(error){
 
           setTimeout(() => {
            setError(false)
           }, 1000)
        }
    }, [error])
    return (
        <div className={`error-component ${error? 'show': ''} ${status? 'success' : '' }`}>
            <div className="close-error">

            </div>
            <p>{ msg }</p>
        </div>
    )
}

export default Error