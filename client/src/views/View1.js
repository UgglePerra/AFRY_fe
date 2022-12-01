import React from 'react'
import { Container, Grid } from '@material-ui/core'
import NewPersonForm from '../components/NewPersonForm/NewPersonForm.js'


const View1 = () => {

  return (
    <Container fixed >
      <br></br>
      <Grid item xs={12} sm={12}>
        <NewPersonForm />
      </Grid>
    </Container>
  )
}

export default View1
