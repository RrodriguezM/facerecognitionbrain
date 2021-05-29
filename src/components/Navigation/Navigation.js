import React from 'react'
import Logo from '../Logo/Logo';
import './Navigation.css'

const Navigation = ({ onSignOut }) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Logo />
            <p className='f3 link dim white underline pa3 pointer leftMove' onClick={() => onSignOut('signin')}>Sign Out</p>
        </nav>
    )
}

export default Navigation;
