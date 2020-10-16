import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppNavbar from "./components/AppNavbar/AppNavbar";
import Header from "./components/shared/header";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Messages from "./components/pages/Messages";
import Footer from "./components/shared/Footer";
import About  from "./components/pages/About";   
import NotFound from "./components/pages/NotFound";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/route/PrivateRoute";
import { getAuthUser } from "./js/actions/authActions";
import Tshirts from "./components/Tshirts";
import Cart from './components/Cart';
import Shop from './components/Shop';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";





function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);
  
  const [products] = useState(Tshirts);
  const [cart, setCart] = useState([])


  //ADD TO CART
  
  const addToCart = (item) => {
    const cartItem = cart.filter(p => p.id === item.id );

    if(cartItem.length>0){
      const addedItem = cart.filter(p => p.id !== item.id);
      const updateQuantity = {
        ...cartItem[0],
        quantity: cartItem[0].quantity + item.quantity
      };
      setCart([...addedItem, updateQuantity]);
    }else{
      setCart([...cart, item]);
    }
  };


  //REMOVE ITEM FROM CART 

  const removeItem = (item) => {
    const newItem = cart.filter(i => {
      return i !== item;
    });
    setCart([...newItem]);
  }


  //INCREASE QUANTITY

  const increment = (item) => {
    let add = cart.find(i => i.id === item.id)
    add.quantity += 1
    setCart([...cart])
  }


  //DECREASE QUANTITY

  const decrement = (item) => {
    let sub = cart.find(i => i.id === item.id)
    if(sub.quantity === 1){
      let newSub = cart.filter(i => i.id !== item.id)
      setCart([...newSub])
    }else{
      sub.quantity -= 1
      setCart([...cart])
    }
  }

  return (
    <Router>
       <AppNavbar /> 
      <Header cart={cart}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/shop" component={()=>(<Shop products={products} addToCart={addToCart} /> )} />
        <Route path="/cart" render={()=> <Cart cart={cart} removeItem={removeItem} increment={increment} decrement={decrement} />}/>
        <Route  path="/messages" component={Messages} />
        <Route path="*" component={NotFound} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
       </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;