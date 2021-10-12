import React from 'react';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import ContactImg from './assets/contact_image.svg';

function ContactCard(){
return(  <Card style={{width:'70%',margin:'5% auto' ,borderRadius:'1rem',border:'1.5px solid rgb(38,34,97,0.4)'}}>
<Radio
checked={true}
color="primary"
name="radio-button-demo"
size="small"
style={{marginLeft:'75%'}}
/>
<img
src={ContactImg} style={{width:'40%',height:'16rem'}}/>
</Card>)
}

export default ContactCard;