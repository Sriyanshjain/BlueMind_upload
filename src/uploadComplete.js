import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core";

function UploadComplete(props){
return(<Paper elevation={0}>
    <Grid container direction="column">
        <Grid item>
         <CheckCircleIcon color="primary" style={{fontSize:'6rem'}}/>
        </Grid>
        <Grid item>
            <Typography style={{fontSize:'2rem',marginTop:'2%',color:'#252161'}}>
            File {props.filename} uploaded successfully !
            </Typography>
            </Grid>
        </Grid>
    </Paper>

)
}
export default UploadComplete;