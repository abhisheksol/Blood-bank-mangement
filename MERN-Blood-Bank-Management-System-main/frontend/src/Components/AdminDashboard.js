import react from 'react';
import { useEffect } from 'react';

const AdminDashboard = () => {

    useEffect(() => {

        const token = localStorage.getItem('token')
        fetch('http://localhost:4000/admin/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
        .then(response => {
            if (response.status === 200)
            {
                return response.json()
            }

            else
            {
                alert("You are not authorized to view this page")
                window.location.href = '/'
            }
        })

    })

    const handleUpdate = () => {
        window.location.href = '/admin/update'
    }


    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={handleUpdate}>Update a Donor Account</button>
        </div>
    )
}

export default AdminDashboard