import { Route,Routes } from 'react-router-dom'
import Home from './components/Home';
import Store from './components/Store'
import Cart from './components/Header/Cart';


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/store/:name' element={<Store />}/>
        <Route path='/cart' element={<Cart />}/>
    </Routes>
  )
}

export default Router