import React from 'react'
import './App.css';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './view/home';
 
const App = props => {
 
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} /*RESPONSIVE*/ /> 
        </Switch>
      </BrowserRouter>
    </>
  )
}
 
export default injectContext(App);
 
