import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, CssBaseline, makeStyles, useTheme, useMediaQuery, Button, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DrawerComponent from './Drawer'


const pages = ['Home', 'View1', 'View2', 'View3']

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "rgba(222, 241, 12, 0.53)",
      borderBottom: "2px solid yellow",
    },
  },
  appBar: {
    backgroundColor: "rgba(17, 17, 104, 0.96)"
  },
  menudiv: {
    marginLeft: 65
  }, 
  drawer: {
    position: 'absolute'
  }
}))

function NavBar() {
  const [, setAnchorElNav] = useState(null)

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <AppBar className={classes.appBar} position="static">
      <CssBaseline />
      <Toolbar>
      <div className={classes.menudiv}>
        <Typography variant="h4" className={classes.logo}>Frontend Test</Typography>
      </div>
      {isMobile ? (
        <div className={classes.drawer}>
          <DrawerComponent />
        </div>
      ) : (
        <Box >
          {pages.map((page) => (
            <Button key={page} onClick={handleCloseNavMenu} >
              <Link className={classes.link} to={`/${page}`}>{page}</Link>
            </Button>
          ))}
        </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default NavBar
