import React from 'react'

const logout = ({ handleLogout }) => {

    return (
        <div classname="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}
export default logout;