import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components 
import Header from "./components/Header";

// Global Styles
import { GlobalStyle } from "./GlobalStyle";


// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';


const App = () =>(
    <Router>
    <Header />
    <Switch>
      <Route exact path="/" component = {Home}/>    
      {/* <Route path="/movies/:movieId" component={Movie} /> */}
      <Route path="/*" component={NotFound}/>
    </Switch>
    <GlobalStyle/>
  </Router>
)


export default App;
