import React,{useState} from 'react';
import {TextField} from  '@material-ui/core';

function ShowTextbox(props) {
    
    const showTextboxValue = (event) =>{
        const newValue = event.target.value;
        console.log('newValue : ' , newValue);
    }
    

    return (
        <div>
            <div> <label>Write Name : </label>  <TextField/>   </div>
           <hr/> <br/> <br/> <br/>
            <div> <label>Write Name : </label>  
                  <TextField
                        label="Enter Name"
                        color="secondary"
                        variant="outlined"
                        onChange={showTextboxValue}
                    />   
            </div>
            <hr/> <br/> <br/> <br/>

                <div> <label>Write Name : </label>  
                    <TextField
                            label="Enter Name"
                            color="secondary"
                            variant="filled"
                            type="password"
                        />   
                </div>

            <hr/> <br/> <br/> <br/>

                <div> <label>Write Name : </label>  
                <TextField
                            label="Enter Name"
                            color="secondary"
                            variant="outlined"
                            type="number"
                        />  
                </div> 
    
        </div>
    )
}

export default ShowTextbox;
