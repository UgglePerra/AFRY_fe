import React from 'react'
import { Container, Grid } from '@material-ui/core'
import NewCompanyForm from '../components/NewCompanyForm/NewCompanyForm.js'
import ListToDisassociate from '../components/ListToDisassociate/ListToDisassociate.js'


const View2 = () => {

  return (
    <Container fixed >
      <br></br>
      <Grid item xs={12} sm={12}>
        <NewCompanyForm />
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs={12} sm={12}>
        <ListToDisassociate/>
      </Grid>
    </Container>
  )
}

export default View2
