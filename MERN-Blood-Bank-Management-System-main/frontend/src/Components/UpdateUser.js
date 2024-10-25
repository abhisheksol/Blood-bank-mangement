import React from 'react';
import { useState, useEffect } from 'react';





const UpdateUser = () => {
    const [donors, setDonors] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [selectedDonor, setSelectedDonor] = useState('');
    const [name, setName] = useState('');
    const [CNIC, setCNIC] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');


    useEffect(() => {
        fetchDonors();
    }, [])

    const fetchDonors = async () => {
        const token = localStorage.getItem('token')
        try {
            const response = await fetch('http://localhost:4000/admin/retrieveAllDonors', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }

            })

            

            if (response.status === 200)
            {
                const data = await response.json();
                console.log(data.donors)
                setDonors(data.donors)
            }

            else if (response.status === 403)
            {
                alert("You are not authorized to perform this action")
                window.location.href = '/login'
            }

            else
            {
                alert("Error occurred while retrieving donors")
            }

        }

        catch (error) {
            console.log("Error occurred while retrieving donors")
        }
    }

    const handleSearch = donors.filter((donor) => {
        return donor.name.toLowerCase().includes(searchItem.toLowerCase())
    })

    const handleBack = () => {
        window.location.href = '/admin/dashboard'
    }

    const updateUserEnable = (donor) => {
        console.log("This is the email: " + email)
        setSelectedDonor(donor)
        
    }

    const handleUpdate = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token')

        

        try {
            const response = await fetch('http://localhost:4000/admin/updateDonor', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify({
                    name: name,
                    CNIC: CNIC,
                    phoneNumber: phone,
                    email: selectedDonor.email,
                    city: city,
                    bloodGroup: bloodGroup

                })

            })

            if (response.status === 200)
            {
                alert("Donor updated successfully!")
                window.location.href = '/admin/dashboard'
            }

            else
            {
                alert("Error occurred while updating donor")
            }
        }

        catch (error) {
            console.log("Error occurred while updating donor")
            console.log(error)
        }

        setSelectedDonor('')
 
    }

    const deleteUser = async (email) => {
        const token = localStorage.getItem('token')

        try {
            const response = await fetch('http://localhost:4000/admin/deleteDonor', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                },
                body: JSON.stringify({email: email})
            })

            if (response.status === 200)
            {
                alert("Donor deleted successfully!")
                window.location.href = '/admin/dashboard'
            }

            else
            {
                alert("Error occurred while deleting donor")
            }
        }

        catch (error) {
            console.log("Error occurred while deleting donor")
            console.log(error)
        }
    }



    return(
        <div>
            <h1>Update User</h1>
            <div class="searchbox">
            <input type="text" placeholder="Search Donor by Name" value={searchItem} onChange={(event) => setSearchItem(event.target.value)} />
            </div>
            <div class="tbl-header">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CNIC</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Blood Group</th>
                        <th>Action</th>
                        <th>Action</th>

                    </tr>
                </thead>
                </table>
                </div>

                <div class="tbl-content">
                <table>
                <tbody>
                    {handleSearch.map((donor) => {
                        return(
                            <tr>
                                <td>{donor.name}</td>
                                <td>{donor.CNIC}</td>
                                <td>{donor.phoneNumber}</td>
                                <td>{donor.email}</td>
                                <td>{donor.city}</td>
                                <td>{donor.bloodGroup}</td>
                                <td><button onClick={() => updateUserEnable(donor)}>Update</button></td>
                                <td><button onClick={() => deleteUser(donor.email)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>

            {selectedDonor && (
                <div class='login-box'>
                    <h2>Update User</h2>
                    <form>
                        <div class="user-box">
                        <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>

                        <div class="user-box">
                        <input type="text" placeholder="CNIC" pattern="\d{5}-\d{7}-\d" value={CNIC} onChange={(event) => setCNIC(event.target.value)} />
                        </div>

                        <div class="user-box">
                        <input type="text" placeholder="Phone Number (11-Digit)" value={phone} pattern="^\d{11}$" onChange={(event) => setPhoneNumber(event.target.value)} />
                        </div>

                        <div class="user-box">
                        <input type="text" placeholder="City" value={city} onChange={(event) => setCity(event.target.value)} />
                        </div>

                        <div class="user-box">
                        <input type="text" placeholder="Blood Group" value={bloodGroup} onChange={(event) => setBloodGroup(event.target.value)} />
                        </div>
                        <button onClick={handleUpdate}>Update</button>
                    </form>
                </div>
            )}

            <button onClick={handleBack}>Back</button>
        </div>
    )


}

export default UpdateUser;