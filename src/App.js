import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='bg-gray-50 pb-32'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route
            exact
            path='/checkout'
            render={props => <Checkout {...props} />}
          />
        </Switch>
      </div>
    </div>
  )
}

export default App
