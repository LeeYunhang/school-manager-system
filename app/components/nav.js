
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

const TabsExampleSimple = () => (
    <Tabs>
        <Tab label="首    页"  value="a">
        </Tab>
        <Tab label="课程介绍"  value="2">
          
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
export default TabsExampleSimple;

