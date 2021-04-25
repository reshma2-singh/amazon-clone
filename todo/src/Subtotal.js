import React from 'react'
import CurrencyFormat from "react-currency-format"
import {useSelector} from "react-redux"
import {selectBasket} from './features/todo/basketSlice'
import { getBasketTotal } from "./features/todo/basketSlice";
function Subtotal() {
    const basket = useSelector(selectBasket)
    return (
        <div className="subtotal" >
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button >Proceed to Payment</button> 
        </div>
    )
}

export default Subtotal
