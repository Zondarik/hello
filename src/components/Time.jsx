import moment from "moment";
import { useState } from "react";

function Time() {
    const [curtrentMoment, changeCurrentMoment] = useState(moment())

    const time = curtrentMoment.format("HH:mm:ss"); 
    const date = curtrentMoment.format("DD.MM.YYYY");
    
    function updateMoment() {
        changeCurrentMoment(moment())
    }

    setTimeout(updateMoment, 100);

    return (
        <div>
            <h1>{time}</h1>
            <h1>{date}</h1>
        </div>
    )    
}

export default Time;