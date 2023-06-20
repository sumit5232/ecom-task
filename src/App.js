import {  Routes,  Route } from 'react-router-dom'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import CheckOut from './components/Checkout'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkOut' element={<CheckOut />} />
      </Routes>
    </>
  )
}

export default App