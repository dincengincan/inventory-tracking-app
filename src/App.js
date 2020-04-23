import React from 'react';
import {Route, Switch} from "react-router";

import LoginPage from "./pages/LoginPage"
import CustomerPage from "./pages/CustomerPage"
import AdminPage from "./pages/AdminPage"
import Header from "./components/Header"


const App = () => {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/admin" component={AdminPage}/>
        <Route exact path="/customer" component={CustomerPage}/>
      </Switch>
    </div>
  )
}


export default App;