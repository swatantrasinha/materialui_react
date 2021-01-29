import React, { useEffect, useLayoutEffect, useState } from 'react';
import {Checkbox} from '@material-ui/core';
import Favourite from '@material-ui/icons/Favorite';
import FavouriteBorder from '@material-ui/icons/FavoriteBorder';


function Show_Checkbox(props) {
    const [checkboxValues , setCheckboxValues] = useState([]);
   
const getCheckboxValue= (event) => {
    const item = event.target.value;
    let myValues = checkboxValues;
    console.log('getCheckboxValue ==> myValues is : '  , myValues)
    if(event.target.checked){
        myValues.push(event.target.value);
        console.log('Now ==> getCheckboxValue ==> myValues is : '  , myValues);
    }else{
        myValues = myValues.filter(ele => ele !== item);
        console.log('Now ==> getCheckboxValue ==> myValues is : '  , myValues);
    }
    
    setCheckboxValues(myValues);
    //console.log(checkboxValues);
    console.log(myValues);
    
}

const getCheckboxValue2 = () => {
    console.log('getCheckboxValue2 !!!');
}
    return (
       <div>
           <h1>React Material UI - Checkbox !!!</h1>
          

           <div className='container'></div>
           
           <div>
                    <label>Check 1 : </label> 
                    <Checkbox color="primary" value="val1" onChange={(event) => getCheckboxValue(event)} />
           </div>
        
           <div>
                    <label>Check 2 : </label> 
                    <Checkbox color="secondary" value="val2" onChange={(event) => getCheckboxValue(event)} />
            </div>

            <div>
                    <label>Check 3 : </label> 
                    <Checkbox indeterminate color="secondary" value="val3" onChange={(event) => getCheckboxValue(event)} />
           </div>

           <div><h2>Checkbox with icons:</h2></div>
          
           <div>
                    <label>Check 4 : </label> 
                    <Checkbox color="secondary" value="val4"
                              onChange={(event) => getCheckboxValue(event)} 
                              icon={<FavouriteBorder />}
                              checkedIcon={<Favourite />}/>
           </div>

       </div>
    )
}

export  default Show_Checkbox;