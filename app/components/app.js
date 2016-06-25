/**
 * Created by mrcode on 16-6-22.
 */

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header'
import Content from "./content";
import Footer from "./footer";
import Page1 from './page1'
import Page2 from './page2'
import { Router, Route, Link, browserHistory } from 'react-router'

/**
 * The Class is the component of the whole App
 * */
export default class App extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (<MuiThemeProvider><div>
            <Header/>
            <Router history={browserHistory}>
                <Route path="/" component={Content}>
                    <Route path="page1" component={Page1}/>
                    <Route path="page2" component={Page2}/>
                </Route>
            </Router>
            <Footer/>
        </div></MuiThemeProvider>);
    }
}

