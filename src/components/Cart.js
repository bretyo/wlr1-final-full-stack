import axios from 'axios'
import {useEffect, useState} from 'react'
import {useSelector, useDispatch}from 'react-redux'
import {setCart} from '../redux/cartReducer'

const Cart = (props) => {
  const {cart} = useSelector((store)=>store.cartReducer)
  const dispatch = useDispatch();

  useEffect(()=>{
    axios.get('/api/cart')
    .then(res=>{
      // console.log(res)
      dispatch(setCart(res.data))
    })
    .catch(err=>{
      if(err.response.status===511){
        props.history.push('/auth')
      }
      console.log(err)
    })
  },[dispatch])

  const handleDeleteFromCart=(product_id)=>{
    axios.delete(`/api/cart/${product_id}`)
    .then(res=>{
      dispatch(setCart(res.data))
    })
    .catch(err=>{
      if(err.response.status===511){
        props.history.push('/auth')
      }
      console.log(err)
    })
  }

  const handleChangeQty=(product_id, quantity)=>{
    if(quantity===0){
      handleDeleteFromCart(product_id)
    }
    else{
      axios.put(`/api/cart/${product_id}`, {quantity})
      .then(res=>{
        dispatch(setCart(res.data))
      })
      .catch(err=>{
        if(err.response.status===511){
          props.history.push('/auth')
        }
        console.log(err)
      })
    }
  }
  
  return(
    <div>
      <h1>Cart Page</h1>
      {cart.map(product=>{
        return <div key={product.product_cart_id} >
          <h4>{product.product_name}</h4>
          <h5>Qty: {product.quantity}</h5>
          <button onClick={()=>handleDeleteFromCart(product.product_id)}>X</button>
          <button onClick={()=>handleChangeQty(product.product_id, product.quantity-1)}>-</button>
          <button onClick={()=>handleChangeQty(product.product_id, product.quantity+1)}>+</button>
        </div>
      })}
    </div>
  )
}

export default Cart