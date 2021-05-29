import React from 'react'
import Logo from '../Logo/Logo';
import './Navigation.css'

const Navigation = ({ onSignOut, isSigned }) => {

    if (isSigned) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Logo />
                <p className='f3 link dim white underline pa3 pointer leftMove' onClick={() => onSignOut('signin')}>Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Logo />
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }} >
                    <p className='f3 link dim white underline pa3 pointer' onClick={() => onSignOut('signin')}>Sign In</p>
                    <p className='f3 link dim white underline pa3 pointer' onClick={() => onSignOut('register')}>Register</p>
                </div>
            </nav>
        )
    }
}

export default Navigation;
