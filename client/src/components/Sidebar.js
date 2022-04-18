import React, { useState } from 'react';
import Icon from '@mdi/react';
import './Sidebar.css';
import { SidebarObjects } from './SidebarObjects';
import { mdiMenu, mdiClose } from '@mdi/js';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Auth from '../utils/auth';

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [anchorEl, setAnchorEl] = useState(false);
  const openDropdown = Boolean(anchorEl);

  const manageClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };

  const manageClose = () => {
    setAnchorEl(null);
  };

  const mobile = useTheme();
  const isMobile = useMediaQuery(mobile.breakpoints.down('md'));

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
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Link className='logo text-decor' to='/'>
                <h1>Fimi</h1>
              </Link>

              {/* <Typography className='logo'>
                <h1>Fimi</h1>
              </Typography> */}
            </Toolbar>
          </>
        ) : (
          <>
            <Toolbar className='header'>
              <Link className='text-decor' to='/'>
                <h1>Fimi</h1>
              </Link>
              <ul className='nav-header'>
                <li>
                  <Link className='text-decor' to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='text-decor' to='/search'>
                    Search
                  </Link>
                </li>
                <li>
                  <Link className='text-decor' to='/login'>
                    Login
                  </Link>
                </li>
                <li>
                  <Link className='text-decor' to='/signup'>
                    Signup
                  </Link>
                </li>
                <li>
                  <a className='text-decor' href='/' onClick={logout}>
                    Logout
                  </a>
                </li>
              </ul>
            </Toolbar>
          </>
        )}
      </AppBar>
    </>
  );
};

export default Sidebar;
