import React from 'react'
import { Container, Grid } from '@material-ui/core'
import ListToAssociate from '../components/ListToAssociate/ListToAssociate.js'


const View3 = () => {

  return (
    <Container fixed >
      <br></br>
      <Grid item xs={12} sm={12}>
        <ListToAssociate/>
      </Grid>
    </Container>
  )
}

export default View3
