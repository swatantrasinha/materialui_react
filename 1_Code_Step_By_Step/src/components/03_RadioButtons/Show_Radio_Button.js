import React, { useState } from 'react'
import {Radio} from  '@material-ui/core';

 function Show_Radio_Button(props) {
    
    const [radioValue, setRadioValue] = useState("other");

    const changeRadioButton = (event) => {
        const valueSelected = event.target.value;
        console.log('valueSelected is : ' , valueSelected);
        setRadioValue(valueSelected);
    }

    return (
       <div>
           <h1> This is Radio Button Demo !!! </h1>
        <div>
            <label>Male : </label>
            <Radio
            color="primary"
            value="male"
            checked={radioValue == 'male'}
            onChange={changeRadioButton}
            />
        </div>

        <div>
            <label>Female : </label>
            <Radio
            color="secondary"
            value="female"
            checked={radioValue == 'female'}
            onChange={changeRadioButton}
            />
        </div>


        <div>
            <label>Other : </label>
            <Radio
            value="other"
            checked={radioValue == 'other'}
            onChange={changeRadioButton}
            />
        </div>


       </div>
    )
}

export default Show_Radio_Button;
