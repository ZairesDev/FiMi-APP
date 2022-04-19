import React from 'react';
import Icon from '@mdi/react';
import {
  mdiHome,
  mdiLoginVariant,
  mdiLogoutVariant,
  mdiClipboardSearchOutline,
  mdiAccountPlus,
  mdiTableLarge,
  mdiClipboardEditOutline,
} from '@mdi/js';

export const SidebarObjects = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon path={mdiHome} />,
  },
  {
    title: 'Login',
    path: '/login',
    icon: <Icon path={mdiLoginVariant} />,
  },
  {
    title: 'Logout',
    path: '/',
    icon: <Icon path={mdiLogoutVariant} />,
  },
  {
    title: 'Sign Up',
    path: '/signup',
    icon: <Icon path={mdiAccountPlus} />,
  },
  // {
  //   title: 'Dashboard',
  //   path: '/dashboard',
  //   icon: <Icon path={mdiTableLarge} />,
  // },
  {
    title: 'Search',
    path: '/search',
    icon: <Icon path={mdiClipboardSearchOutline} />,
  },
  // {
  //     title: 'Employee Form',
  //     path: '/empform',
  //     icon: <Icon path={mdiClipboardEditOutline}/>
  // }
];
