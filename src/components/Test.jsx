import { useEffect, useState } from "react";
import axios from 'axios';
import React,{ Component } from "react";
import { render } from "@testing-library/react";

export default class Ccomponents extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

componentDidMount() {
    fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
    .then(res => res.json())
    .then(
        (result) =>{
                this.setState({
                isLoaded: true,
                items: result.drinks
                });
            },
            (error) =>{
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        ) 
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error){
            return <p> Error {error.message} </p>
        } else if (!isLoaded){
            return <p> Loading... </p>
        }else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.strDrink}
                        </li>
                    ))}
                </ul>
            )
        }
    }
}

export default Test