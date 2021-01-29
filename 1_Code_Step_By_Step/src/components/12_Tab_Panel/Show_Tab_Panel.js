import React, { useState } from 'react';
import {Tab,Tabs,AppBar } from '@material-ui/core';
import Content_1 from './Content_1';
import Content_2 from './Content_2';
import Content_3 from './Content_3';

function Show_Tab_Panel(props) {
    const [tabSelectedValue, setTabSelectedValue] = useState(0);

    const handleTabs = (event,val) => {
        console.log('handleTabs !!! ' , val);
        setTabSelectedValue(val);
    }

    const Tab_Panel_Content = (props) => {
        const {children,value,index} = props;

        return(
            <div>
                {
                    value == index && ( <h1> {children} </h1>)
                }
               
            </div>
        )
    }


    return (
       <div>
          
<AppBar position="static">
    <Tabs value={tabSelectedValue} onChange={handleTabs}>
        <Tab label="Item 1"/>
        <Tab label="Item 2"/>
        <Tab label="Item 3"/>
    </Tabs>
</AppBar>


{/* Tab Content */}
<Tab_Panel_Content value={tabSelectedValue} index={0} >  <Content_1/> </Tab_Panel_Content>
<Tab_Panel_Content value={tabSelectedValue} index={1} > <Content_2/>  </Tab_Panel_Content>
<Tab_Panel_Content value={tabSelectedValue} index={2} > <Content_3/> </Tab_Panel_Content>

       </div>
    )
}

export default Show_Tab_Panel;