import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
      <h1>HATSPAGE</h1>
  </div>
);



function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
