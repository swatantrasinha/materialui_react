import React from 'react';
import {Switch} from  '@material-ui/core';

 function Show_Switch(props) {
    
const getSwitchValue = (event,value) => {
    console.log('switch value is : ' , value);
}
    return (
       <div>
           <h1>Show Switch !!!</h1>
           <Switch 
                color="primary"
                size="small"
                onChange={getSwitchValue}
           />

       </div>
    )
}

export default Show_Switch;
