import React from 'react'
import Logo from '../Logo/Logo';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Logo />
            <p className='f3 link dim white underline pa3 pointer leftMove'>Sign Out</p>
        </nav>
    )
}

export default Navigation;