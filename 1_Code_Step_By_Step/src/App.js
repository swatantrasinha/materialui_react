import {Button} from '@material-ui/core';
import Showbuttons from './components/01_Buttons/ShowButtons';
import ShowCustomizeButton from './components/01_Buttons/ShowCustomizeButton';
import ShowButtonGroup from './components/01_Buttons/ShowButtonGroup';
import Show_Checkbox from './components/02_Checkboxes/Show_Checkbox';
import Show_Radio_Button from './components/03_RadioButtons/Show_Radio_Button';
import Show_Slider from './components/04_Slider/Show_Slider';
import Show_Dropdown from './components/05_Select_Dropdown/Show_Dropdown';
import ShowTextbox from './components/06_TextBox/Show_TextBox';
import Show_Switch from './components/07_Switch/Show_Switch';
import Box_Layoyt from './components/08_Box_Layout/Box_Layoyt';
import Container_Layout from './components/09_Container_Layout/Container_Layout';
import Grid_System from './components/10_Grid_System/Grid_System';
import Hidden_Layout from './components/11_Hidden_Layout/Hidden_Layout';
import Show_Tab_Panel from './components/12_Tab_Panel/Show_Tab_Panel';
import Show_React_Routing from './components/13_Menu_With_React_Routing/Show_React_Routing';

function App() {
  return (
    <div className="App">
     This is App Component 
     <br/>
     <Button color='primary'>Clike Me</Button>
   

     <hr/>
        <div>
            {/* <Showbuttons />
               <br/>
            <ShowCustomizeButton/>
            <br/>
            <ShowButtonGroup /> 
            <br/>
            <Show_Checkbox />
            <br/>
            <Show_Radio_Button />  
            <hr/>  
            <Show_Slider />
            <hr/>  
            <Show_Dropdown />
            <hr/>  
            <ShowTextbox /> 

            <Show_Switch /> 

            <Box_Layoyt /> 
            <Container_Layout/> 
            <Grid_System />  

            <Hidden_Layout/> 
         
            <Show_Tab_Panel /> */}
            
            <Show_React_Routing />

        </div>




    </div>
  );
}

export default App;
