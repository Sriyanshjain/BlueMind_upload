import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles= makeStyles({
    lowStyle:{
     color:'#252161',
     
    },
    highStyle:{
        color:'#8bc63e',
        
       },
})
function CircularProgressWithLabel(props) {
    const classes=useStyles();
  return (
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
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function Loader() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
