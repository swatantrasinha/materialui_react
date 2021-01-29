import React from 'react';
import {Grid,Hidden} from '@material-ui/core';


function Hidden_Layout(props) {
    
    return (
       <div>
           <Grid item container spacing={2} xs={12}>
               <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'red'}}> Block A</h2></Grid>
               <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'yellow'}}> Block B</h2></Grid>
               <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'green'}}> Block C</h2></Grid>
               <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'blue'}}> Block D</h2></Grid>
           </Grid>

           <hr/>

           <Grid item container spacing={2} xs={12}>
               <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'red'}}> Block A</h2></Grid>
               <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'yellow'}}> Block B</h2></Grid>
              <Hidden only={['lg','md']}> <h2 style={{backgroundColor:'green' , flex:1}}> Block C</h2></Hidden>
               <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'blue'}}> Block D</h2></Grid>
           </Grid>
       </div>
    )
}
export default Hidden_Layout;