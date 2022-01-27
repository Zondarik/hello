import moment from "moment";
import { useEffect, useState } from "react";



function Yahoo() {

    const url = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/GOOG?modules=price'
    
    useEffect(()=>{
        
        fetch('https://query1.finance.yahoo.com/v10/finance/quoteSummary/GOOG?modules=price')
            .then(response => response.json())
            .then(console.log)
        
    })

    return (
        <div>

        </div>
    )      
}

export default Yahoo;