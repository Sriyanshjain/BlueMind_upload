import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { Grid } from "@material-ui/core";
import Uploadpage from './Uploadpage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  PaperStyle:{
      width:'100%',
      
      
  }
  })
function App() {
  const classes=useStyles();
  return (
    <div className="App">
      <Grid container direction="row" justifyContent="center"
  alignItems="center">
    <Grid item xs={false} sm={2}/>
    <Grid item xs={12} sm={8}>
     <Paper className={classes.PaperStyle} >
       <Uploadpage/>
     </Paper>
     </Grid>
     <Grid item xs={false} sm={2}/>
     </Grid>
    </div>
  );
}

export default App;
