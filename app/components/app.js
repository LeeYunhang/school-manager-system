/**
 * Created by mrcode on 16-6-22.
 */

import React from 'react'
import Locations from './Test.jsx'
import Header from './header'
import Theme from 'material-ui/styles/MuiThemeProvider'

/**
 * The Class is the component of the whole App
 * */
export default class App extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <Theme>
                <div>
                    <Header />
                    <Locations/>
                </div>
            </Theme>);
    }
}

