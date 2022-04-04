import React from 'react'
import Icon from '@mdi/react'
import { mdiHome, mdiLoginVariant, mdiLogoutVariant, mdiTable, mdiClipboardSearchOutline, mdiAccountPlus } from '@mdi/js';

export const SidebarObjects = [
    {
        title: 'Home',
        path: '/',
        icon: <Icon path={mdiHome} />
    },
    {
        title: 'Login',
        path: '/login',
        icon: <Icon path={mdiLoginVariant} />
    },
    {
        title: 'Logout',
        path: '/',
        icon: <Icon path={mdiLogoutVariant} />
    },
    {
        title: 'Sign Up',
        path: '/signup',
        icon: <Icon path={mdiAccountPlus} />
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <Icon path={mdiTable} />
    },
    {
        title: 'Search',
        path: '/search',
        icon: <Icon path={mdiClipboardSearchOutline} />
    }
];