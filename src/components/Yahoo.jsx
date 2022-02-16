import { useEffect, useState } from "react";



function Yahoo() {

    const url = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/GOOG?modules=price'
    this.state = {
        error: null,
        isLoaded,
        items: []
    };
    

    useEffect(()=>{
        
        fetch('https://query1.finance.yahoo.com/v10/finance/quoteSummary/GOOG?modules=price')
        .then(response => response.json("response"))
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.quoteSummary
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )

    return (
    <ul>{items.map(item =>(
            <li key={item.name}>
                {item.price}
            </li>
        ))}
    </ul>
            
        
    )      
}

export default Yahoo