import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import CustomerDetail from './components/CustomerDetail';
import NotFound from './components/NotFound';

const App = (props) => {
  return (
    <>
      <h2>React Hackathon</h2>
      <hr />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/customers' component={CustomerList} />
        <Route exact path='/customer-form' component={CustomerForm} />
        <Route exact path='/customer-detail/:id' component={CustomerDetail} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
