import React from 'react'

export default ({ user }) => {
    return (
        <div className="media mt-3">
            <img src={user.avatar} className="mr-3 rounded-circle" alt="..." />
            <div className="media-body">
                <h5 className="mt-0">{`${user.first_name} ${user.last_name}`}</h5>
                <p>{user.email}</p>
            </div>
        </div>
    )
}