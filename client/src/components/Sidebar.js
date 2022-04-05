import React, { useState } from 'react'
import Icon from '@mdi/react'
import './Sidebar.css'
import { SidebarObjects } from './SidebarObjects';
import { mdiMenu, mdiClose } from '@mdi/js'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Box, MenuItem } from '@mui/material';



const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const mobile = useTheme();
    const isMobile = useMediaQuery(mobile.breakpoints.down('md'))

    return (
        <>
            <AppBar>
                {isMobile ? (
                    <>
                        <Toolbar className='header'>

                            <div>
                                <Icon edge='start' className='menuBtn' path={mdiMenu} onClick={showSidebar} />
                            </div>
                            <div className={sidebar ? 'nav-bar active' : 'nav-bar'}>
                                <ul>
                                    <li className='nav-data-toggle'>
                                        <Link to='#' className='nav-menu'>
                                            <Icon className='menuBtn' path={mdiClose} onClick={showSidebar} />
                                        </Link>
                                    </li>
                                    {SidebarObjects.map((data, key) => {
                                        return (
                                            <li key={key} className='nav-text'>
                                                <Link to={data.path}>
                                                    <div className='icons'>{data.icon}</div>
                                                    <div>{data.title}</div>
                                                </Link>
                                                <span></span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <Typography className='logo'><h1>Fimi</h1></Typography>
                        </Toolbar>
                    </>) : (
                    <>
                        <Toolbar className='header'>
                            <h1>Fimi</h1>
                            <ul className='nav-header'>
                                <li>
                                    <Typography>
                                        Home
                                    </Typography>
                                </li>
                                <li>
                                    <Typography aria-controls='menu' aria-haspopup='true' aria-expanded='false' onClick={() => {}}>
                                        Management
                                    </Typography>
                                </li>
                                <li>
                                    <Typography>
                                        Logout
                                    </Typography>
                                </li>
                            </ul>
                        </Toolbar>
                        <Menu>
                            <MenuItem>Hi</MenuItem>
                            <MenuItem>Hi</MenuItem>
                        </Menu>
                    </>)}
            </AppBar>
        </>
    )
}

export default Sidebar;