import React from 'react';
import {Box,Button} from  '@material-ui/core';
function Box_Layoyt(props) {    

    return (
       <div>
           <h1>Material UI - Layout - Box</h1>
          <Box>
            <Button>My Button</Button>
        </Box>
<hr/>
        <Box component="span">
            <Button>My Button inside span</Button>
        </Box>
<hr/>
        <Box clone style={{color:'red'}} m={20} p={10}>
            <Button>My Red Button</Button>
        </Box>

       </div>
    )
}

export default Box_Layoyt;
