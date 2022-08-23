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
import {makeStyles} from '@material-ui/core/styles';

const useStyle=makeStyles({
  root:{
    background:'linear-gradient(45deg,#333,3999)',
    border:0,
    borderRadius:15,
    color:'white',
    padding:'0 30px'
  }
})
function ButtonStyle() {
  const classes=useStyle()
  return <Button className='classes.root'>Test style button</Button>
}
function CheckboxExample() {
  const[checked,setChecked]=React.useState(true)
  return (

    
    <FormControlLable
    control={

        <Checkbox
          checked={checked}
          icon={<DeleteIcon/>}
          checkedIcon={<SaveIcon/>}
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
    <div className="App">
      <header className="App-header">
        <ButtonStyle/>
        <TextField variant='filled' color="secondary" type="time" label="the time"/>
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
  );
}

export default App;
