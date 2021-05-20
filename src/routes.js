// IMPORT SWITCH AND ROUTE FROM REACT ROUTER DOM
import {Switch, Route} from 'react-router-dom'
import Cart from './components/Cart'
import Dash from './components/Dash'
import Auth from './components/Auth'
import Products from './components/Products'
// SET UP ROUTES FOR OUR COMPONENTS
export default (
<Switch>
    <Route exact path='/' component={Dash} />
    <Route path='/cart' component={Cart} />
    <Route path='/auth' component={Auth}  />
    <Route path='/products' component={Products} />
</Switch>
)