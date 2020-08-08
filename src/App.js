import React from 'react'
import Header from './components/Header'
import UserList from './components/UserList'

export default () => {
  return (
    <div>
      <Header />
      <div className='container mt-4 mb-5'>
        <UserList />
      </div>
    </div>
  )
}
