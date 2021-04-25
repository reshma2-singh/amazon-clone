import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Todos from './features/todo/Todos'
import {useSelector} from "react-redux"
import {selectBasket} from './features/todo/basketSlice'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom"
 

function Cart() {
    const basket = useSelector(selectBasket)
    return (
        
        <nav className="header">
            <img className = "header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            <div  className="header__search">
            <input type="text" className="header__searchInput"/>
            < SearchIcon className="header__searchIcon"/>
            </div>
            <Link to ="/login" className="header__link">
            <div className="header__option">
            
            
                <span className="header__optionLineOne">Hello Reshma</span>
                <span className="header__optionLineTwo">Sign In</span>
          
           
            </div>
            </Link>
            
            
            <Link to ="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>
            <Link to ="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>
            <Link to ="/checkout" className="header__link">
            <div className="header__optionBasket">
           <ShoppingBasketIcon/>
           < span className="header__optionLineTwo header__basketCount">{basket.length}</span> 
           </div>
           </Link>
           
        </nav>
    
    )
}

export default Cart
