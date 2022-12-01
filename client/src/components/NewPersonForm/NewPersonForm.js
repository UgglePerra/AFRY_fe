import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core"
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'
import { createPerson } from '../../actions/persons'
import { getCompanies } from '../../actions/companies'


const NewPersonForm = () => {
  const[personData, setPersonData] = useState({ firstname: '', surname: '', company: ''})
  const classes = useStyles()
  const dispatch = useDispatch()

  dispatch(getCompanies(), [])

  const companies = useSelector((state) => state.company)
 
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPerson(personData))
    clear()
  }

  const clear = () => {
    setPersonData({ firstname: '', surname: '', company: ''})
  }

  return (
    <div>
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h5">Creating a person</Typography>
          <TextField name="firstname" variant="outlined" label="First name" fullWidth value={personData.firstname} onChange={(e) => setPersonData({ ...personData, firstname: e.target.value })}/>
          <TextField name="surname" variant="outlined" label="Surname" fullWidth value={personData.surname} onChange={(e) => setPersonData({ ...personData, surname: e.target.value })}/>
          <FormControl className={classes.formControl} variant="outlined" fullWidth>
            <InputLabel id="simple-select">Company</InputLabel>
            <Select value={personData.company} label="Company" onChange={(e) => setPersonData({ ...personData, company: e.target.value })}>
              <MenuItem value=""><em>None</em></MenuItem>
              {companies.map((c) => (
              <MenuItem key={c._id} value={c.companyname} >{c.companyname}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br></br>
          <br></br>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>submit</Button>
          <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    </div>
  )
}

export default NewPersonForm
