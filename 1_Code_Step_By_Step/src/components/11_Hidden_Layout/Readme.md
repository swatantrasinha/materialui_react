## Using Grid System to hide 
=============================
See Hidden_Layout.js

 <Grid item container spacing={2} xs={12}>
    <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'red'}}> Block A</h2></Grid>
    <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'yellow'}}> Block B</h2></Grid>
    <Hidden only={['lg','md']}> <h2 style={{backgroundColor:'green'}}> Block C</h2></Hidden>
    <Grid item lg={3} md={4} sm={6} xs={12}> <h2 style={{backgroundColor:'blue'}}> Block D</h2></Grid>
</Grid>

This will hide Block C when screen size is lg or md
For Block C, as its Hidden so flex:1 is needed tp take complete width


