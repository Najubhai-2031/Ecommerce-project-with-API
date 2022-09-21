import './App.css';
import React, { useEffect, useState } from 'react';
import Signup from './Component/Signup';
import Login from './Component/Login';
import ChangePassword from './Component/ChangePassword';
import ForgotPassword from './Component/ForgotPassword';
import Products from './Component/Products';
import ProductDetails from './Component/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Component/Navbar';
import ViewCart from './Component/ViewCart';
import MakeOrder from './Component/MakeOrder';
import YourOrder from './Component/YourOrder';
import UserProfile from './Component/UserProfile';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Home from './Component/Home';
import WishList from './Component/WishList';

function App() {

  const [product, setProduct] = useState([])
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isloading, setIsloding] = useState(false)

  useEffect(() => {
    axios('https://akashsir.in/myapi/ecom1/api/api-view-product.php')
      .then(res => { setProduct(res.data.product); setIsloding(true) })
      .catch(err => setError(err.message))
  })

  const ProductDetailss = (item) => {
    let aa = JSON.stringify(item)
    localStorage.setItem('Item', aa)
  }

  const handleCart = (id) => {
    const user = localStorage.getItem('User')
    if (user === null) {
      setMessage('Login First')
    }
    else {
      let userParse = JSON.parse(user)
      const Cart = {
        user_id: userParse.user_id,
        product_id: id,
        product_qty: 1
      }
      axios.post('https://akashsir.in/myapi/ecom1/api/api-cart-insert.php', Cart, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
        .then(res => {setMessage(res.data.message);alert(message)})
    }
  }

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/singup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/ChangePassword' element={<ChangePassword />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/Product' element={<Products product={product} error={error} isloading={isloading} message={message}  handleCart={handleCart} ProductDetailss={ProductDetailss} />} />
          <Route path='/ProductDetails' element={<ProductDetails handleCart={handleCart} message={message} />} />
          <Route path='/Cart' element={<ViewCart />} />
          <Route path='/Checkout' element={<MakeOrder />} />
          <Route path='/YourOrder' element={<YourOrder />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/WishList' element={<WishList />} />
        </Routes>
        <Footer />
      </Router>

    </React.Fragment>
  );
}

export default App;
