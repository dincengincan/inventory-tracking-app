import React from 'react';
import { Route, Switch } from 'react-router';

import LoginPage from './pages/LoginPage';
import CustomerPage from './pages/CustomerPage';
import AdminPage from './pages/AdminPage';
import RequestPage from './pages/RequestPage';
import RequestSubmitPage from './pages/RequestSubmitPage';
import SuccessPage from './pages/SuccessPage';
import Header from './components/Header';
import SimpleStepper from './components/SimpleStepper';

const App = () => {
  return (
    <div>
      <Header />
      <Route
        exact
        path={`/(request|request-submit|request-success)`}
        component={SimpleStepper}
      />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/customer" component={CustomerPage} />
        <Route exact path="/request" component={RequestPage} />
        <Route exact path="/request-submit" component={RequestSubmitPage} />
        <Route exact path="/request-success" component={SuccessPage} />
      </Switch>
    </div>
  );
};

export default App;
