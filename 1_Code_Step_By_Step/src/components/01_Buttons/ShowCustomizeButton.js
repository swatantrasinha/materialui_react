import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function ShowCustomizeButton(props) {
    const [btnColor,setButtonColor] = useState('primary');
    const clickHandler1 = () =>{
        console.log('clickHandler1 !!!');
        setButtonColor('secondary');
    }
    return (
       <div>
           <Button 
                variant="contained" 
                color={btnColor}
                size="large" 
                onClick= { clickHandler1}>Button 1</Button>

            <Button 
                variant="outlined" 
                color="secondary"
                size="medium" >Button 2</Button>

            <Button 
                variant="outlined" 
                color="primary"
                size="small" disabled>Button 3</Button>
                <hr/>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}>Save</Button>

                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>

                <hr/>
      
       </div>
    )
}
export default ShowCustomizeButton;