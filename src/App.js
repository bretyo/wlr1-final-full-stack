import './App.css';
import routes from './routes'
import Header from './components/Header'
// import {setUser} from './redux/authReducer'
// import {setCart} from './redux/cartReducer'
// import {useDispatch} from 'react-redux'
// import axios from 'axios'
// import {withRouter} from 'react-router-dom'
// import {useEffect} from 'react'

function App() {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   axios.get('/auth/me')
  //   .then(res=>{
  //     dispatch(setUser(res.data.user))
  //     dispatch(setCart(res.data.cart))
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //     if(err.response.status===511){
  //       props.history.push('/auth')
  //     }
  //   })
  // },[])

  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
