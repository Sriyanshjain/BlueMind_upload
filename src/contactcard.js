import React from 'react';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import ContactImg from './assets/contact_image.svg';

function ContactCard(){
return(  <Card style={{width:'80%',margin:'5% 10%',borderRadius:'15px',border:'1.5px solid rgb(38,34,97,0.4)'}}>
<Radio
checked={true}
color="primary"
name="radio-button-demo"
size="small"
style={{marginLeft:'80%'}}
/>
<img
src={ContactImg} style={{width:'40%',height:'250px'}}/>
</Card>)
}

export default ContactCard;