import React from 'react'
import {useDispatch} from "react-redux"
import {del} from './features/todo/basketSlice'

function CheckoutProduct({id,title,price,image},index) {
    const dispatch = useDispatch()
    return (
        <div className="checkoutProduct">
            <img className="checkout__image" src ={image} alt=""/>  
            <div className="checkoutProduct__info">
            <p >{id}</p>
      <p >{title}</p>
      <p className="checkoutProduct__price">
      <small>$</small>
          <strong>{price}</strong>
        </p>
      
      <button className="btn" onClick={()=>dispatch(del({id:id,index:index
        
      }))} >Remove from basket</button> 
      </div>
        </div>
    )
}

export default CheckoutProduct
