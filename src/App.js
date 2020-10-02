import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';

// const HatsPage = () => (
//   <div>
//       <h1>HATSPAGE</h1>
//   </div>
// );


function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
