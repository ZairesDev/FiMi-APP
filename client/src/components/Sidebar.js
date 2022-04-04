import React, { useState } from 'react'
import Icon from '@mdi/react'
import './Sidebar.css'
import { SidebarObjects } from './SidebarObjects';
import { mdiMenu, mdiClose } from '@mdi/js'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const mobile = useTheme();
    const isMobile = useMediaQuery(mobile.breakpoints.down('md'))

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography>
                    </Typography>
                    <div>
                        {isMobile ? (
                            <>
                                <div>
                                    <Icon className='icons' path={mdiMenu} onClick={showSidebar} />
                                </div>
                                <div className={sidebar ? 'nav-bar active' : 'nav-bar'}>
                                    <ul>
                                        <li className='nav-data-toggle'>
                                            <Link to='#' className='nav-menu'>
                                                <Icon className='icons' path={mdiClose} onClick={showSidebar} />
                                            </Link>
                                        </li>
                                        {SidebarObjects.map((data, key) => {
                                            return (
                                                <li key={key} className='nav-text'>
                                                    <Link to={data.path}>
                                                        {data.icon}
                                                        <div>{data.title}</div>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </>) : (
                            <>
                            normal
                            </>)}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Sidebar;