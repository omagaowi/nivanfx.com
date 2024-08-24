import { useEffect, useState } from 'react'
import '../styles/error.css'

const Error = ({ error, msg, setError }) => {
    console.log(error)
    useEffect(() => {
        if(error){
            console.log(msg)
           setTimeout(() => {
            setError(false)
           }, 1000)
        }
    }, [error])
    return (
        <div className={`error-component ${error? 'show': ''}`}>
            <div className="close-error">

            </div>
            <p>{ msg }</p>
        </div>
    )
}

export default Error