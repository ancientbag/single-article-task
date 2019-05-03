import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";



export default class Router extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" render={(props)=>{return <Main {...props} />}} />
        </Switch>
      </BrowserRouter>
    )
  }
}
