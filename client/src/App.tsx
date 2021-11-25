import React,{useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './components/login'
import {Customer} from './components/types'
import Home from './components/Home';
import './App.css';
import ProductPage from './components/ProductPage';
import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';


function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [customer, setCustomer] = useState<Customer>()
  const setCustomerData = (customer: Customer) => {
    setCustomer(customer)
    console.log("Customer", customer)
  }
 
  return(
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/login">
          <Login setCustomer={setCustomerData}/>
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/product/:productId">
        <ProductPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
