import React from 'react';
import {Grid} from '@material-ui/core';


function Grid_System(props) {
    return (
       <div>
            <h1> Grid System !!!</h1>
            <Grid container item spacing={2} xs={12}>
                <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'red'}}> Block A </h2> </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'yellow'}}> Block B </h2> </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'green'}}> Block C </h2> </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'blue'}}> Block D </h2> </Grid>
            </Grid>
            
            <hr/>

            <Grid container>
                <Grid item lg={6}> <h2 style={{backgroundColor:'red'}}> Block 1 </h2> </Grid>
                <Grid item llg={6}> <h2 style={{backgroundColor:'yellow'}}> Block 2 </h2> </Grid>
            </Grid>

            <hr/>
            
            <Grid container>
                <Grid item lg={6}> <h2 style={{backgroundColor:'red'}}> Block 1 </h2> </Grid>
                <Grid item lg={6}> <h2 style={{backgroundColor:'yellow'}}> Block 2 </h2> </Grid>
            </Grid>
        </div>
    )
}

export default Grid_System;
