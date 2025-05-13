import { Box, Button } from '@mui/material'
import React from 'react'
import UserTable from './UserTable';
import userList from '../Data/user.json'

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    const openAddUser = () => {
        // Logic to open add user modal
        console.log('Open add user modal');
    }
    return (
        <>
            <Box>
                <h1>Dashboard</h1>
                <p>{user.name}, Welcome to the admin dashboard</p>
                <Button variant="contained" color="primary" type="button" onClick={openAddUser}>Add User</Button>
                <UserTable data={userList}/>
            </Box>
        </>
    )
}

export default Dashboard