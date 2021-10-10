import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Contact from './assets/Contacts upload.svg';


import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';
import ContactCard from "./contactcard";
import Loader from "./loader";


const useStyles = makeStyles({
  linkStyle:{
      textDecoration:'none',
      color:'#7cb3df'
  },
  linkStyle2:{
    textDecoration:'none',
    fontSize:'20px'
  },
  input: {
    display: 'none',
  },
  Buttonstyle:{
      backgroundColor:'#7cb3df',
      color:'#ffff'
  },

    })
function Uploadpage(){

    const classes=useStyles();
    return (<Grid container direction="column">
        
        <Grid item xs={3} >
            <Typography style={{marginTop:"10%",padding:'2%', color:'#262261'}}>
                BlueMind | <span style={{fontWeight:'bold'}}>Fact Finding</span>
            </Typography>
        </Grid>
        <Grid item xs={3}>
            <Typography style={{marginTop:"10%",padding:'2%', color:'#262261'}}>
                Import to BlueMind
            </Typography>
        </Grid>
        
        <Grid container direction="row" alignItems="center">
           <Grid item xs={2}/>
            <Grid item xs={8}>
           <img src={Contact} style={{width:'70%'}}/>
           </Grid>
           <Grid item xs={2}/>
        </Grid>
        <Grid container direction="row" alignItems="center"  style={{marginTop:'5%'}}>
           <Grid item xs={4}/>
            <Grid item xs={4}>
                {/* <ContactCard/> */}
  <Loader/>
           </Grid>
           <Grid item xs={4}/>
        </Grid>

        <Grid container direction="row" alignItems="center" style={{justifyContent:'center'}}>
          
            <Grid item xs={12} sm={8}>
            <Typography style={{marginTop:"5%",padding:'2%',fontSize:'30px',fontFamily: 'Open Sans, sans-serif', color:'#a8a6c0'}}>
                File from computer
            </Typography>
           </Grid>
           <Grid item xs={12} sm={8}>
            <Typography style={{marginTop:"2%",padding:'1%',fontSize:'20px',fontFamily: 'Open Sans, sans-serif', color:'#a8a6c0'}}>
               Upload any CSV,XLS or XLSX files with your data.
            </Typography>
           </Grid>
           <Grid item xs={12} sm={8}>
            <Typography style={{marginTop:"2%",padding:'1%',fontSize:'20px',fontFamily: 'Open Sans, sans-serif',fontWeight:'bold', color:'#262261'}}>
               Need help getting started ?
            </Typography>
           </Grid>
        </Grid>
        <Grid container direction="row" style={{marginTop:'2%'}}>
            
            <Grid item xs={4}>
            <Typography style={{padding:'1%',fontSize:'20px',fontFamily: 'Open Sans, sans-serif',fontWeight:'bold'}}>
               <a className={classes.linkStyle} href="#">View import guide</a>
            </Typography>
            </Grid>
            <Grid item xs={5}>
            <Typography style={{padding:'1%',fontSize:'20px',fontFamily: 'Open Sans, sans-serif',fontWeight:'bold'}}>
               <a className={classes.linkStyle} href='#'> Download sample spreadsheet</a>
            </Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography style={{padding:'1%',fontSize:'20px',fontFamily: 'Open Sans, sans-serif',fontWeight:'bold'}}>
               <a className={classes.linkStyle}  href="#">View the FAQ</a>
            </Typography>
            </Grid>
  
        </Grid>
        <Grid container direction="row" style={{marginTop:'10%',padding:'2%'}}>
            
            <Grid item xs={3}>
            <a className={classes.linkStyle2} href="#">Cancel</a>
            </Grid>
            <Grid item xs={6}/>
            <Grid item xs={3}>
            <input
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" className={classes.Buttonstyle} component="span">
          import
        </Button>
      </label>
           </Grid> 
        </Grid>
        
    </Grid>)
}
export default Uploadpage;