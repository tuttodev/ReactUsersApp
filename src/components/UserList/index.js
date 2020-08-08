import React, { useState, useEffect } from 'react'
import UserRow from '../UserRow'

export default () => {

    const [users, setUsers] = useState([])
    const [loadingUsers, setLoadingUsers] = useState(true)

    useEffect(() => {
        fetchUsers()
    })

    const fetchUsers = async () => {
        let res = await fetch('https://reqres.in/api/users')
        let data = await res.json()
        setUsers(data.data)
        setLoadingUsers(false)
    }

    return (
        <div>
            <div className='text-center'>
                { loadingUsers && <div className="spinner-border" role="status"></div> }
            </div>            
            {
                users.map(user => (
                    <UserRow
                        key={user.id}
                        user={user}
                    />
                ))
            }           
        </div>
    )
}