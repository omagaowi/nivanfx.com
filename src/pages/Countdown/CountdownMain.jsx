import { useEffect, useState } from 'react';
import './countdown.css'


const CountdownMain = () => {

    const [secondsText, setSeconds] = useState('00')
    const [minutesText, setMinutes] = useState('00')
    const [hoursText, setHours] = useState('00')
    const [daysText, setDays] = useState('00')

    const timer = () => {
        // const lunch = new Date("June 28, 2022 00:00:00").getTime();
        const lunchTime = new Date("September 23, 2024 00:00:00").getTime(); //Date Counting To
        const currentTime = new Date().getTime() //Current Date
        const remain = lunchTime - currentTime;
    
        const days = document.querySelector('.days span')
        const hours = document.querySelector('.hours span')
        const minutes = document.querySelector('.minutes span')
        const seconds = document.querySelector('.seconds span')
    
        const day = 1000 * 60 * 60 * 24;
    
        const currenthour = new Date().getHours();

    
        const currentminute = new Date().getMinutes();
    
    
        const currentsecond = new Date().getSeconds();
    
    
        const dayremain = Math.floor(remain / day);
    
        const hourremain = 23 - currenthour;
        // console.log(hourremain);
    
        const minuteremain = 59 - currentminute;
        // console.log(minuteremain);
    
        const secondremain = 59 - currentsecond;
        // console.log(secondremain);


        if(currentTime > lunchTime){
            setSeconds(prev => `00`)
            setMinutes(prev => `00`)
            setDays(prev => `00`)
            setHours(prev => `00`)
        }else{
            if(secondremain < 10){
                setSeconds(prev => `0${secondremain}`)
            } else{
                setSeconds(prev => `${secondremain}`)
            }
            if(minuteremain < 10){
                setMinutes(prev => `0${minuteremain}`)
            } else{
                setMinutes(prev => `${minuteremain}`)
            }
            if(hourremain < 10){
                setHours(prev => `0${hourremain}`)
            } else{
                setHours(prev => `${hourremain}`)
            }
            if(dayremain < 10){
                setDays(prev => `0${dayremain}`)
            } else{
                setDays(prev => `${dayremain}`)
            }
        }

    }
    
    useEffect(() => {
        const imterval = setInterval(() => {
            timer();
        }, 1000);
        return () => clearInterval(imterval)
    }, [])

    return (
        <div className="countdown-main" id='countdown-section'>
            <div className="countdown-dark">
                <h1>We are Launching Soon!</h1>
                <p className='sub-text'>We're excited announce the launch our premium signals and mentorship programmes Your can now signup from <b>September 23rd 2024</b> and the program is expected to commence from <b>October 1st 2024</b></p>
                <div className="timer">
                    <div className="timer-half">
                        <div className="time-property">
                            <h3>{ daysText }</h3>
                            <p>DAYS</p>
                        </div>
                        <div className="time-property">
                            <h3>{ hoursText }</h3>
                            <p>HOURS</p>
                        </div>
                    </div>
                    <div className="timer-half">
                        <div className="time-property">
                            <h3>{ minutesText }</h3>
                            <p>MINUTES</p>
                        </div>
                        <div className="time-property">
                            <h3>{ secondsText }</h3>
                            <p>SECONDS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountdownMain