import { makeStyles } from '@material-ui/core/styles'


export default makeStyles(() => ({
  appBar: {
    borderRadius: 0,
    margin: '10px 0',
    height:'100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  heading: {
    color: 'black',
  },
}))
