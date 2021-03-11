import React from 'react';
import './ContactForm.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Input } from '@material-ui/core';
import CountrySelector from './CountrySelector';
import IndustrySelector from './IndustrySelector';
import OperationGeographySelector from './OperationGeographySelector';
import Button from '@material-ui/core/Button';
import PrivacyCheckBox from './PrivacyCheckBox';
import NewsletterCheckbox from './NewsletterCheckbox';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ThankYouImage from './images/thankyou.jpg';

interface IProps {}

interface IState {
  firstname: string;
  lastname?: string;
  email: string;
  jobtitle?: string;
  company: string;
  industry: string | null;
  country: string | null;
  operatingGeography: string| null;
  comment: string;
  checkedA: boolean;
  checkedB: boolean;
  submitButton: boolean;
  dialog: boolean;
}

class ContactForm extends React.Component<IProps, IState>  {

  constructor(props: IProps) {
      super(props);
      this.handleChange_InputElement = this.handleChange_InputElement.bind(this);
      this.handleChange_SelectElement = this.handleChange_SelectElement.bind(this);
      this.initalState = this.initalState.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    initalState(){
      this.setState({
                firstname: '',
                lastname: '',
                email: '',
                jobtitle: '',
                company: '',
                industry: 'Banking',
                country: '',
                operatingGeography: '',
                comment: '',
                checkedA: false,
                checkedB: false,
                submitButton: false,
                dialog: false
      }
    );
    }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        console.log('firstname state: ' + this.state.firstname);
        console.log('lastname state: ' + this.state.lastname);
        console.log('email state: ' + this.state.email);
        console.log('company state: ' + this.state.company);
        console.log('country state: ' + this.state.country);
        console.log('industry state: ' + this.state.industry);
        console.log('jobtitle state: ' + this.state.jobtitle);
        console.log('operating state: ' + this.state.operatingGeography);
        console.log('checkedA state: ' + this.state.checkedA as string);
        console.log('checkedB state: ' + this.state.checkedB as string);
        this.setState({dialog: true});
   }

  handleChange_InputElement = (e: React.ChangeEvent<HTMLInputElement>): void => {
       this.setState((prevState) => ({
           ...prevState,
           [e.target.name]: e.target.value
       }));
         this.enableButton(e.target.name, e.target.value);
   }
   handleChange_SelectElement = (e: React.ChangeEvent<HTMLInputElement>, name : string): void =>  {
        if (name === 'country')
          this.setState({country: e.target.textContent});
        if (name === 'industry')
            this.setState({industry: e.target.textContent});
        if (name === 'operatingGeography')
            this.setState({operatingGeography: e.target.textContent});

         }
   handleChange_CheckBox = (e: React.ChangeEvent<HTMLInputElement>):void => {
           this.setState((prevState) =>({ ...prevState, [e.target.name]: e.target.checked }));
           const checked = e.target.checked as unknown as string;
           this.enableButton(e.target.name, checked);
         }

  enableButton(name : string, value: string){
    if(name === 'checkedA')
    {
        const checked = value as unknown as boolean;
       if(checked && this.state.firstname !== "" && this.state.email !== "" && this.state.company !== "")
       {
           this.setState({submitButton: true});
         }
       else
       {
           this.setState({submitButton: false});
         }
    }
    if(name === 'firstname')
      if(value!=="" && this.state.email !== "" && this.state.company !== "" && this.state.checkedA)
          this.setState({submitButton: true});
      else
          this.setState({submitButton: false});
    if(name === 'email')
            if(value!=="" && this.state.firstname !== "" && this.state.company !== "" && this.state.checkedA)
                this.setState({submitButton: true});
            else
                this.setState({submitButton: false});
    if(name === 'company')
            if(value!== "" && this.state.firstname !== "" && this.state.email !== "" && this.state.checkedA)
                this.setState({submitButton: true});
            else
                this.setState({submitButton: false});


  }

  handleDialogClose = (e: React.ChangeEvent<HTMLInputElement>):void => {
    this.setState({dialog: false});
  }


         UNSAFE_componentWillMount(){
           this.initalState();
         }

render(){
  return (
    <React.Fragment>
    <form onSubmit={this.handleSubmit} >
        <Grid container spacing={3}>
        <Grid item lg={6} sm={6} xs={12}>
            <Typography  component="div">First Name*
              </Typography>
                <Input required fullWidth={true} disableUnderline={true} type="firstname" name="firstname" onChange={this.handleChange_InputElement}/>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
            <Typography component="div">Last Name
              </Typography>
                  <Input fullWidth={true} disableUnderline={true} type="lastname" name="lastname" onChange={this.handleChange_InputElement}/>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
            <Typography  component="div">Email*
              </Typography>
                <Input required fullWidth={true} disableUnderline={true} type="email" name="email" onChange={this.handleChange_InputElement}/>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
            <Typography component="div">Job title
              </Typography>
                  <Input fullWidth={true} disableUnderline={true} type="jobtitle" name="jobtitle" onChange={this.handleChange_InputElement}/>
        </Grid>
          <Grid item lg={12} sm={12} xs={12}>
        <Box m="0.1rem" />
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
            <Typography  component="div">Company*
              </Typography>
                <Input required fullWidth={true} disableUnderline={true} type="company" name="company" onChange={this.handleChange_InputElement}/>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
            <Typography component="div">Industry*
              </Typography>
                <IndustrySelector  onSelectChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleChange_SelectElement(e,'industry')}/>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
            <Typography  component="div">Country*
              </Typography>
                <CountrySelector onSelectChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleChange_SelectElement(e,'country')}/>
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
            <Typography component="div">Operating geography*
              </Typography>
                <OperationGeographySelector onSelectChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleChange_SelectElement(e,'operatingGeography')}/>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
      <Box m="0.1rem" />
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
          <Typography component="div">What would you like to talk about?
            </Typography>
                <Input  fullWidth={true} disableUnderline={true} multiline={true} rows={4} type="comment" name="comment" onChange={this.handleChange_InputElement}/>
      </Grid>

      <Grid item container lg={6} sm={6} xs={12}>
      <PrivacyCheckBox handleChange={this.handleChange_CheckBox}/>
      <br/>
      <NewsletterCheckbox  handleChange={this.handleChange_CheckBox}/>
      </Grid>
      <Grid item container lg={6} sm={6} xs={12} justify="flex-end" >
          <Button variant="contained" disabled={!this.state.submitButton} color="secondary" style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px'}}  type="submit">Send</Button>
          <Dialog fullWidth scroll='paper' maxWidth="sm" open={this.state.dialog} onClose={this.handleDialogClose}>
          <DialogContent style={{ overflow: "hidden" }}>
          <Grid container lg={12} sm={12} xs={12} justify="center">
          <img src={ThankYouImage} alt="thankyou" id="thankyouimage"/>
          <Typography component="div">
           We appreciate you contacting Modularbank.<br/>
           One of our colleagues will get back in touch with you soon!<br/>
           Have a great day!
          </Typography>
            <Grid item xs={12} sm={12} md={12} lg={12}
                style={{
                    textAlign:'center' // this does the magic
                }}
            >
            <Button variant="contained" color="primary"  >
              <Typography align='center' component="h6">Follow us</Typography>
              </Button>
            <Grid item lg={12} sm={12} xs={12}>
            <Box m="1.5rem" />
            </Grid>
            </Grid>
            </Grid>
            </DialogContent>
          </Dialog>
      </Grid>
      </Grid>
      </form>
      </React.Fragment>
  );
}
}
export default ContactForm;
