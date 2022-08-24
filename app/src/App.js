import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from "@material-ui/core/Button";
import { Button, ButtonGroup } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLable from "@material-ui/core/FormControlLabel";
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
// font
import 'fontsource-roboto';

// import Typography
import Typography from '@material-ui/core/Typography';
// container
import Container from '@material-ui/core/Container';

// paper for grid
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles({
  root: {
    background: 'linear-gradient(45deg,#FE6BBB,#999)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})
const theme = createTheme({
  typography: {
    h3: {
      fontSize: 24
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[400]
    }
  }
})
function ButtonStyle() {
  const classes = useStyle()
  return <Button className={classes.root}>Test style button</Button>
}
function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (


    <FormControlLable
      control={

        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}

          color="primary"
          inputProps={{
            'aria-label': 'secondary check'
          }}
        />
      }
      label="Testing Checkbox"
    />






  )

}


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <Typography variant='h3' component="div">

              Welcome to MuI
            </Typography>

            <Typography variant='subtitle1'>

              shekoofeh shojai
            </Typography>
            <ButtonStyle />
            <Grid container spacing={4} justifyContent="center">

              <Grid item xs={12} sm={6} xl={3}>
                <Paper style={{ height: 75, width:" 100%" }} />
              </Grid>

              <Grid item xs={3} xl={3} >
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>

              <Grid item  xs={3} xl={3}>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>

            </Grid>
            <TextField variant='filled' color="secondary" type="time" label="the time" />
            < CheckboxExample />

            <ButtonGroup variant="contained">
              <Button onClick={() => alert('hello')} color='secondary'
                //  style={{fontSize:24}}
                startIcon={<SaveIcon />}

              // endIcon={<SaveIcon />}
              >Default</Button>


              <Button onClick={() => alert('hello')} color='primary' startIcon={<DeleteIcon />}
              //  style={{fontSize:24}}
              // startIcon={<SaveIcon />}

              // endIcon={<SaveIcon />}
              >Default</Button>

            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />


          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
// https://www.youtube.com/watch?v=vyJU9efvUtQ