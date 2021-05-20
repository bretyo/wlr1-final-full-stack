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
      console.log(res)
      dispatch(setCart(res.data))
    })
    .catch(err=>{
      console.log(err)
    })
  },[dispatch])

  const handleDeleteFromCart=(product_id)=>{
    axios.delete(`/api/cart/${product_id}`)
    .then(res=>{
      dispatch(setCart(res.data))
    })
  }
  return(
    <div>
      <h1>Cart Page</h1>
      {cart.map(product=>{
        return <div key={product.product_id} >
          <h4>{product.product_name}</h4>
          <h5>Qty: {product.quantity}</h5>
          <button onClick={()=>handleDeleteFromCart(product.product_id)}>X</button>
        </div>
      })}
    </div>
  )
}

export default Cart