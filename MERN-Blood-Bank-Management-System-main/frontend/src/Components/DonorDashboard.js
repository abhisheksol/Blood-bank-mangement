import react from 'react';
import { useEffect } from 'react';

const DonorDashboard = () => {

    useEffect(() => {

        const token = localStorage.getItem('token')
        fetch('http://localhost:4000/donor/verify', {
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

    }, [])

    return (
        <div>
            <h1>Donor Dashboard</h1>
        </div>
    )
}

export default DonorDashboard