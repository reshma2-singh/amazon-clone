import React from 'react'
import {useSelector} from "react-redux"
import {selectBasket} from './basketSlice'

function Todos() {
    const basket = useSelector(selectBasket)
    return (
        <>
        
        {basket.map((basket)=>basket)}

        </>

    )
    
}

export default Todos
