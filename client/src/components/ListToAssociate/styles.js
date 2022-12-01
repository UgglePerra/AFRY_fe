import { makeStyles } from '@material-ui/core/styles'


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formControl: {
    width: '98.7%',
    margin: '15px 0',
  },
  buttonSubmit: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'rgba(98, 98, 145, 0.96)'
  },
  buttonClear: {
    marginBottom: 10,
    backgroundColor:'rgba(132, 44, 124, 0.96)'
  },
  headcell: {
    fontWeight: 'bold'
  }
}))
