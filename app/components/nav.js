
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import  Page1 from "./page1";
import  Page2 from "./page2";

const TabsExampleSimple = () => (
        <Tabs>
            <Tab label="首页" >
               <page1></page1>
            </Tab>
            
            <Tab label="课程介绍" >
                <page2></page2>
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