import React from 'react';


import './App.css';
import Home from './Home'
import Cart from './Cart'
import Checkout from './Checkout'
import {BrowserRouter,Route,Switch} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="app">
      <Cart/>
      <div className="app__body" >
      <Switch>
      <Route exact path="/" component={Home}/>
   <Route exact path="/checkout" component={Checkout}/>
      </Switch>
      </div>
      
      </div>
  
    </BrowserRouter>
    </>
  );
}

export default App;
