import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from './routes/App';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/app" component={App} />
      <Redirect from="*" to="/app" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
