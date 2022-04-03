import { TextField ,Button,makeStyles, Card} from '@material-ui/core'
import React from 'react';

const useStyle=makeStyles({
    input:{
        padding:8
    },
    form:{
        display:'flex',
        alignItems:'center'
    },
    card:{
        width:400,
        margin:'50px auto',
        padding:10
        
    },
    button:{
        padding:10
    }

})

const Form = () => {
    const classes=useStyle();
    return (
        <Card className={classes.card}> 
            <form className={classes.form}>
                <TextField className={classes.input} id="outlined-basic" label="Enter name" variant="outlined" />
                <Button className={classes.button} variant="contained" color="primary">ADD</Button>
            </form>
        </Card>
    )
}

export default Form
