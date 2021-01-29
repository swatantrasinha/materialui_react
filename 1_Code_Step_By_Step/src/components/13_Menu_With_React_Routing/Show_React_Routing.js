import React,{useState} from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import {Menu,MenuItem,Button } from '@material-ui/core';
import About_Comp from './About_Comp';
import Home_Comp from './Home_Comp';


function Show_React_Routing(props) {
     const [buttonStatus, setButtonStatus] = useState(null);  

     const openMenu= (event) => {
        setButtonStatus(true);
    }
    const closeMenu= (event) => {
        setButtonStatus(null);
    }

    return (
        <Router>
            <Button onClick={openMenu}>Menu</Button>
            <Menu open={buttonStatus} >
                <MenuItem onClick={closeMenu}>
                    <Link to="/"> Home</Link>
                </MenuItem>

                <MenuItem onClick={closeMenu}>
                    <Link to="/about">About</Link>
                </MenuItem>
            </Menu>

          
          

            <Route path="/about"> <About_Comp/> </Route>
            <Route exact path="/"> <Home_Comp /> </Route>

        </Router>
    )
}
export default Show_React_Routing;