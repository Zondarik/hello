import { useEffect, useState } from "react";



function Yahoo() {

    const url = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/GOOG?modules=price'
    
    useEffect(()=>{
        
        // fetch('https://api.github.com/orgs/nodejs')
        // .then(response => response.json("response"))
        // .then(data => {
        // console.log(data) // Prints result from `response.json()` in getRequest
        // })
        // .catch(error => console.error(error))
        

        fetch('https://api.github.com/orgs/nodejs', {
            //mode: 'no-cors',
            method: 'GET',
        })
        
        .then(response => response.json("response"))
        .then(data => {console.log(data)})
        .catch(error => console.error(error))
    })

    return (
        <div>

        </div>
    )      
}

export default Yahoo;