import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {saveTodo} from './features/todo/basketSlice'
import Todos from './features/todo/Todos'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Todo({id,title,price,image},index) {
const[input,setInput] = useState('')
const dispatch = useDispatch()

    return (
        <Card className="product">
            <CardContent/>
            <h3>{title}</h3>
            <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <img src={image} alt="" />
            
               
            <button onClick={() =>dispatch(saveTodo({
                id:id,
                title:title,
                price : price,
                image:image,
                index:index
            }))}>add to basket</button>
          
          <CardContent/>  
        </Card>
    )
}

export default Todo
