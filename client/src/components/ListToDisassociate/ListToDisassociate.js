import * as React from 'react'
import { useState, useEffect } from 'react'
import { InputLabel, MenuItem, FormControl, Select, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@material-ui/core'
import LinkOffIcon from '@material-ui/icons/LinkOff'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'
import { getCompanies } from '../../actions/companies'
import { getPersons, disassociatePerson } from '../../actions/persons'


const ListToDisassociate = () =>{
  const classes = useStyles()
  const [selectedCompany, setSelectedCompany] = useState({ companyname: '' })
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getCompanies())
    dispatch(getPersons())
  }, [dispatch, flag])
  
  const companies = useSelector((state) => state.company)
  const persons = useSelector((state) => state.person)
  

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
        <Typography variant="h5">List of persons employed at selected company</Typography>
        <FormControl className={classes.formControl} variant="filled" fullWidth>
          <InputLabel id="simple-select">Select company</InputLabel>
          <Select value={selectedCompany.companyname} label="Company" onChange={(e) => setSelectedCompany({ ...selectedCompany, companyname: e.target.value })}>
            <MenuItem value=""><em>None</em></MenuItem>
            {companies.map((c) => (
            <MenuItem key={c._id} value={c.companyname} >{c.companyname}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TableContainer component={Paper} className={classes.table}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
              <TableRow className={classes.header}>
                <TableCell key="firstname" className={classes.headcell}>First name</TableCell>
                <TableCell key="surname" className={classes.headcell} align="left">Surname</TableCell>
                <TableCell key="company" className={classes.headcell} align="left">Company</TableCell>
                <TableCell key="disassociate" className={classes.headcell} align="left">Disassociate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {persons.filter((p) => p.company !== '').filter(p => p.company === selectedCompany.companyname).map((p) => (
                <TableRow >
                  <TableCell key={`${p._id} ${p.firstname}`} className={classes.cell} component="th" scope="row">{p.firstname}</TableCell>
                  <TableCell key={`${p._id} ${p.surname}`} className={classes.cell} align="left">{p.surname}</TableCell>
                  <TableCell key={`${p._id} ${p.company}`} className={classes.cell} align="left">{p.company}</TableCell>
                  <TableCell key={p._id} className={classes.cell} align="left">
                  <Button size="small" color="primary" onChange={() => setFlag(true)} onClick={() => dispatch(disassociatePerson(p._id))}><LinkOffIcon/></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </Paper>
  )
}

export default ListToDisassociate
