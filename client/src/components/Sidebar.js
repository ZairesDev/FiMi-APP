import React, { useState } from 'react';
import Icon from '@mdi/react';
import './Sidebar.css';
import { SidebarObjects } from './SidebarObjects';
import { mdiMenu, mdiClose } from '@mdi/js';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from '@mui/material';
import Auth from '../utils/auth';

// const logout = (event) => {
//   event.preventDefault();
//   Auth.logout()
// }

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
              <Typography className='logo'>
                <h1>Fimi</h1>
              </Typography>
            </Toolbar>
          </>
        ) : (
          <>
            <Toolbar className='header'>
              <h1>Fimi</h1>
              <ul className='nav-header'>
                <li>
                  <Typography>Home</Typography>
                </li>
                <li>
                  <Typography
                    aria-controls='menu'
                    aria-haspopup='true'
                    aria-expanded={openDropdown ? 'true' : undefined}
                    onClick={manageClick}
                  >
                    Management
                  </Typography>
                </li>
                <li>
                  <Typography>Login</Typography>
                  {/* <Link to='/login'></Link> */}
                </li>
                <li>
                  <Typography>Sign up</Typography>
                  {/* <Link to='/signup'></Link> */}
                </li>
                <li>
                  <Typography>Logout</Typography>
                  {/* <a href='/' onClick={logout}>
                    Logout
                  </a> */}
                </li>
                <Menu id='menu' anchorEl={anchorEl} open={openDropdown} onClose={manageClose}>
                  <MenuItem onClick={manageClose}>
                    <Link className='no-text-decor' to='/empform' path='/empform'>
                      Add Employee
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={manageClose}>
                    <Link className='no-text-decor' to='/dashboard' path='/dashboard'>
                      Dashboard
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={manageClose}>
                    <Link className='no-text-decor' to='/search' path='/search'>
                      Search
                    </Link>
                  </MenuItem>
                </Menu>
              </ul>
            </Toolbar>
          </>
        )}
      </AppBar>
    </>
  );
};

export default Sidebar;
