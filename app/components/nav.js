
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default class TabsExampleControlled extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '1',
        }

        this.handleChange = value => {
            this.setState({
                value: value,
            });
        }
    }
    
    render() {
        return ( <Tabs
                value={this.state.value}
                onChange={this.handleChange}>
                <Tab label="首    页"    value="a">
                    <h1>owiewoje</h1>
                </Tab>
                <Tab label="课程介绍"  value="2">
                    <h2>ojweijfiwfi2222222222</h2>
                </Tab>

                <Tab label="教学团队"  value="3">

                </Tab>

                <Tab label="课程建设" value="4" >

                </Tab>

                <Tab label="课程资源"  value="5">

                </Tab>


                <Tab label="问题答疑" value="6" >

                </Tab>

                <Tab label="课程研究"  value="7">

                </Tab>
            </Tabs>
        );
    }
}
