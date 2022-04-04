import React from 'react'

import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';


const Sidebar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <>
        <AppBar>
            <Toolbar>
            <Typography>HI</Typography>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Sidebar;