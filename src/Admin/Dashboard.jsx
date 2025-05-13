import { Box, Button, Dialog, TextField } from '@mui/material';
import React from 'react';
import UserTable from './UserTable';
import userList from '../Data/user.json';

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [userModal, setUserModal] = React.useState(false);

    // Open modal
    const openAddUser = () => {
        setUserModal(true);
    };

    // Close modal
    const closeAddUser = () => {
        setUserModal(false);
    };
    // Submit form
    const submitForm = (e) => {
        e.preventDefault();
        // You can handle adding user here
        const formData = new FormData(e.target);
        const newUser = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            role: formData.get('role'),
        };
        console.log('New User:', newUser);
        closeAddUser();
    };

    return (
        <>
            <Box sx={{ padding: 3 }}>
                <h1>Dashboard</h1>
                <p>{user?.name}, Welcome to the admin dashboard</p>

                <Button variant="contained" color="primary" onClick={openAddUser}>
                    Add User
                </Button>

                <UserTable data={userList} />

                <Dialog open={userModal} onClose={closeAddUser}>
                    <Box sx={{ width: 400, padding: 3 }}>
                        <h2>Add User</h2>

                        <form onSubmit={(e) => submitForm(e)}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <TextField type='text' label="Name" name='name' variant="outlined" required />
                                <TextField type='email' label="Email" name='email' variant="outlined" required />
                                <TextField type='password' label="Password" name='password' variant="outlined" required />
                                <TextField type='text' label="Role" name='role' variant="outlined" required />
                                <Button variant="contained" color="primary" type="submit">Add User</Button>
                            </Box>
                        </form>

                        <Button variant="outlined" color="secondary" onClick={closeAddUser} sx={{ marginTop: 2 }}>
                            Close
                        </Button>
                    </Box>
                </Dialog>
            </Box>
        </>
    );
}

export default Dashboard;
