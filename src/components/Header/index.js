import React from 'react'
import logo from '../../assets/images/logo.svg'

export default () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className='container'>
                <a className="navbar-brand" href="/">
                    <img 
                        src={logo} 
                        width={30} 
                        height={30} 
                        className="d-inline-block align-top mr-3" 
                        alt="" 
                        loading="lazy" />
                    ReactUsersApp
                </a>
            </div>            
        </nav>
    )
}