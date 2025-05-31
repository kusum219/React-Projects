import { useState } from "react"

export default function WindowResize(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useState(()=>{
        window.addEventListener("resize",handelResize);
    },[width,height])

    function handelResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    return(
        <div>
            <h1>Winodw Resize</h1>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    )
}