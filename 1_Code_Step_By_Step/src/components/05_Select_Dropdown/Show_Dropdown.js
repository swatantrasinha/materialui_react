import React, { useState } from 'react'
import {Select,MenuItem} from  '@material-ui/core';

 function Show_Dropdown(props) {
    const [dropdownValue, setDropdownValue] = useState("0");
    const updateDropdownValue = (event,val) => {
        const myValue = event.target.value;
        console.log('selected ==> ' , myValue);
        setDropdownValue(myValue);
    }

    return (
       <div>
           <h1>Dropdown is below !!!!</h1>
           <Select value={dropdownValue} onChange={updateDropdownValue}>
                <MenuItem value="0">Select</MenuItem>
               <MenuItem value="1">One</MenuItem>
               <MenuItem value="2">Two</MenuItem>
               <MenuItem value="3">Three</MenuItem>
               <MenuItem value="4">Four</MenuItem>
               <MenuItem value="5">Five</MenuItem>
           </Select>
       </div>
    )
}

export default Show_Dropdown;
