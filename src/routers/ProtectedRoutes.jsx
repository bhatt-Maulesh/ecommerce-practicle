import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes(element) {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            {user.role ==='admin' ? <Outlet/> : <Navigate to="/" />}
        </>
    )
}

export default ProtectedRoutes