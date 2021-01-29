import React, { useState } from 'react'
import {Slider} from  '@material-ui/core';

function Show_Slider(props) {

    const getSliderValue1 = (event,value) => {
        console.log('event is : ' , event);
        console.log(' slider1 value is : ' , value);
    }
    const getSliderValue2 = (event,value) => {
        console.log('event is : ' , event);
        console.log(' slider2 value is : ' , value);
    }

    const [sliderVal, setSliderVal] = useState([40,60]);

    const updateRangeSlider = (event,item) => {
        console.log('event is : ' , event);
        console.log('for ' , event.target.id , ' ==> the item is : ' , item);
        setSliderVal(item);
    }

    const myMark = [
        {
            value : 0,
            label : 'start'
        },
        {
            value : 25,
            label : 'quarter'
        },
        {
            value : 50,
            label : 'half'
        },
        {
            value:75,
            label:'3/4th'
        },
        {
            value:'100',
            label:'century'
        }
    ];

    return (
        <div>
        <h1> Slider Display </h1>

       <div className="container" style={{display:'flex'}}>
           <div style={{width:300 , margin:100}}>
                    <Slider
                            color="primary"
                            defaultValue={0}
                            step={5}
                            max={100}
                            marks={myMark}
                            valueLabelDisplay="auto"
                            onChange={getSliderValue1}
                    />
            </div>

            <div style={{width:300 , height:500 ,margin:100}}>
                    <Slider
                            color="secondary"
                            defaultValue={0}
                            step={5}
                            max={100}
                            marks={myMark}
                            valueLabelDisplay="auto"
                            orientation="vertical"
                            onChange={getSliderValue2}
                    />
            </div>

          
            <div style={{width:300 , margin:100}}>
                    <Slider
                            color="secondary"
                            defaultValue={0}
                            step={5}
                            max={100}
                            marks={myMark}
                            valueLabelDisplay="auto"
                            value={sliderVal}
                            onChange={updateRangeSlider}
                    />
            </div>

       </div> {/* Container ends  */}
       </div>
      

       
    )
}

export default Show_Slider;
