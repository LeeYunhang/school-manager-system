
import React from "react"
import App from "./app"
import {Router ,Route ,hashHistory} from 'react-router'
import Page1 from "./page1"
import Page2 from "./page2"

export default class Router_me extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (<Router history={hashHistory}>
              <Route path="/" component={App}>
                  <Route path="/page1" component={Page1}/>
                  <Route path="/page2" component={Page2}/>
               </Route>
            </Router>
        );
    }
}