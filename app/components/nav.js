
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props.route} was activated.`);
}

const TabsExampleSimple = () => (
        <Tabs>
            <Tab label="首页" >
            </Tab>


            <Tab label="课程介绍" >

            </Tab>

            <Tab label="教学团队" >

            </Tab>

            <Tab label="课程建设" >

            </Tab>

            <Tab label="课程资源" >

            </Tab>


            <Tab label="问题答疑" >

            </Tab>

            <Tab label="课程研究" >

            </Tab>
        </Tabs>

);

export default TabsExampleSimple;