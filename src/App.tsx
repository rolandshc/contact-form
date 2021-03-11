import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ContactForm from './ContactForm';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../public/favicon.ico';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#d32f2f'
        }
      },
});


function App() {
  return (
    <React.Fragment>
     <MuiThemeProvider theme={theme}>
        <Container maxWidth="lg">
        <Grid container spacing={3}>
        <Grid item lg={12} xs={12}>
            <Typography variant="h3" component="h3" align='center'>Contact us
              </Typography>
        </Grid>
        <Grid item lg={5} sm={5} xs={12}>
            <Typography variant="h6" component="h6">
                        <Box lineHeight={2}>Media enquiries:
                        </Box>
            </Typography>
            <Typography variant="h6" component="span">
            <Link href="mailto:press@modularbank.co" color='inherit'underline='none'>
            press@modularbank.co
            </Link>
            </Typography>
            <Box m="2rem" />
            <Typography variant="h6" component="h6">
                                <Box lineHeight={2}>Career questions:
                                </Box>
            </Typography>
            <Typography variant="h6" component="span">
            <Link href="mailto:careers@modularbank.co" color='inherit'underline='none'>
            careers@modularbank.co
            </Link>
            </Typography>
            <Box m="2rem" />
            <Typography variant="h6" component="h6">
            <Box lineHeight={2}>
            Our offices:<br/>
            Tallinn, Estonia<br/>
            Vabaduse Workland<br/>
            Pärnu mnt 12, 10146
            </Box>
            <Box m="2rem" />
            </Typography>
            <Typography variant="h6" component="h6">
            <Box lineHeight={2}>
            Berlin, Germany<br/>
            Bikini Berlin, Scaling Spaces, 2.OG<br/>
            Budapester Str. 46<br/>
            10787 Berlin
            </Box>
            </Typography>
        </Grid>
        <Grid item lg={7} sm={7} xs={12}>
            <ContactForm/>
        </Grid>
      </Grid>

        </Container>
        </MuiThemeProvider>
      </React.Fragment>
  );
}

export default App;
