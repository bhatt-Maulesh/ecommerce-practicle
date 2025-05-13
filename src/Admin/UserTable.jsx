import React from 'react'

function UserTable({data}) {
    
  return (
    <div style={{marginTop: '20px'}}>
        <h1>User Table</h1>
        <table style={{width: '100%', border: '1px solid black', borderCollapse: 'collapse'}}>
            <thead style={{backgroundColor: '#f2f2f2'}}>
                <tr style={{border: '1px solid black'}}>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length >0 && data.map((item, index) => (
                        <tr key={index} style={{border: '1px solid black'}}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))

                }

            </tbody>
        </table>
    </div>
  )
}

export default UserTable