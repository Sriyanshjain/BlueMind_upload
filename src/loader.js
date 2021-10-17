import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import UploadComplete from './uploadComplete';

const useStyles= makeStyles({
    lowStyle:{
     color:'#252161',
     
    },
    highStyle:{
        color:'#8bc63e',
        
       },
       Uploadstatustext:{
           fontSize:'2rem'
       }
})
function CircularProgressWithLabel(props) {
    const classes=useStyles();
  return (
      <Paper elevation={0}>
    {  (props.loadercomplete) ?(<UploadComplete filename={props.filename}/>):<Paper elevation={0}>
   <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" className={(props.value>=50 ?  classes.highStyle : classes.lowStyle)} {...props} size="18rem" thickness={2}/>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        
      >
        <Typography variant="caption" component="div" style={{fontSize:'5rem'}}className={(props.value>=50 ?  classes.highStyle : classes.lowStyle)}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
      
    </Box>
    <Typography className={classes.Uploadstatustext} style={{display:(props.value<=50)?'':'none'}}>Uploading file..</Typography>
      <Typography className={classes.Uploadstatustext}  style={{display:(props.value>50 && props.value<=75)?'':'none'}} >Converting..</Typography>
      <Typography  className={classes.Uploadstatustext} style={{display:(props.value>75)?'':'none'}} >Almost done..</Typography>
      </Paper>}
    </Paper>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  loadercomplete:PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  filename:PropTypes.string.isRequired,
};

export default function Loader(props) {
  const [progress, setProgress] = React.useState(10);
  const [loaderComplete, setIsLoaderComplete] = React.useState(false);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(function(prevProgress){
          if(prevProgress>=100){
            
             setIsLoaderComplete(true);
             return 100;
             
          }
          else{
          return prevProgress+=10;
          }
      }
      
      );
    }, 1000);
    return () => {
        
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel loadercomplete={loaderComplete} value={progress} filename={props.filename} />;
}
