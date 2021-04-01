import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
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
        </Switch>
      </div>
    </div>
  )
}

export default App
