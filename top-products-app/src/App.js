import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './AllProductsPage';
import ProductDetailsPage from './ProductDetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProductsPage} />
        <Route path="/product/:productId" component={ProductDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
