import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux'
import Admin from "./containers/App.js";
const store = createStore(rootReducer,applyMiddleware(thunk))


ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/admin/vehicles" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);