import axios from 'axios'
import {setUser} from '../redux/authReducer'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import { setCart } from '../redux/cartReducer'

const Auth = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister=()=>{
    axios.post('/auth/register', {email,password})
    .then(res=>{
      console.log(res.data)
      dispatch(setUser(res.data))
      axios.get('/api/cart')
      .then(res=>{
        dispatch(setCart(res.data))
        props.history.push('/products') //make sure it's in the .then
      })
    })
    .catch(err=>console.log(err))
  }
  const handleLogin=()=>{
    axios.post('/auth/login', {email,password})
    .then(res=>{
      dispatch(setUser(res.data))
      axios.get('/api/cart')
      .then(res=>{
        dispatch(setCart(res.data))
      })
      props.history.push('/products')
    })
    .catch(err=>console.log(err))
  }

  return(
    <div>
      <h1>Auth Page</h1>
      <input placeholder='enter email here' value={email} onChange={e=>setEmail(e.target.value)} />
      <input type='password' placeholder='enter password here' value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Auth;