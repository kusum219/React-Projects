import { useState } from "react"
import "./clock.css"

export default function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useState(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date);
        }, 1000);
        
        return () =>{
            clearInterval(intervalId);
        }
    },[])

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;


        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridiem}`
    }
    function padZero(number){
        return (number < 10 ? "0" : "")+number;
    }

    return(
        <div className="clock">
        <h1>DIgital Clock</h1>
        <h1 className="time">{formatTime()}</h1>
    </div>)
}