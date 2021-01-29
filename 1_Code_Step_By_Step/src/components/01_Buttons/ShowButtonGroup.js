import {Button,ButtonGroup} from '@material-ui/core';

function ShowButtonGroup(props) {
    

    return (
       <div>
           <ButtonGroup
                variant="outlined"
                color="primary"
                orientation="vertical">

                    <Button>One</Button>
                    <Button color="secondary">Two</Button>
                    <Button variant="contained"> Three</Button>
           </ButtonGroup>
       </div>
    )
}
export default ShowButtonGroup;