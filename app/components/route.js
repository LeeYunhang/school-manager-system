
import React from "react"
import Content from "./content"
import {Router ,Route ,hashHistory} from 'react-router'
import Page1 from "./page1"
import Page2 from "./page2"

export default class extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (<Router history={hashHistory}>
              <Route path="/" component={Content}>
                  <Route path="/page1" component={Page1}/>
                  <Route path="/page2" component={Page2}/>
               </Route>
            </Router>
        );
    }
}