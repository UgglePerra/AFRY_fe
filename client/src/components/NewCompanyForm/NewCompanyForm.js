import React, { useState } from 'react'
import { Paper, Typography, Button, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import { createCompany } from '../../actions/companies'


const NewCompanyForm = () => {
  const[companyData, setCompanyData] = useState({ companyname: ''})
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createCompany(companyData))
    clear()
  }

  const clear = () => {
    setCompanyData({ companyname: ''})
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h5">Creating a company</Typography>
        <TextField name="companyname" variant="outlined" label="Company name" fullWidth value={companyData.companyname} onChange={(e) => setCompanyData({ companyname: e.target.value })}/>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>submit</Button>
        <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default NewCompanyForm
