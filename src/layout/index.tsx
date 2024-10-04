import React from 'react'
import { Outlet } from 'react-router-dom'
import { Drawer } from '../components/drawer'

export default function Layout() {
    

    return (
        <>
             <Drawer/>
            <Outlet />
        </>
    )
}
