/**
 * Created by mrcode on 16-6-22.
 */

import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header'
import  Content from "./content";
import Footer from "./footer";
import Test from "./Test";


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
            <Content><Test></Test></Content>
            <Footer/>
        </div></MuiThemeProvider>);
    }
}

