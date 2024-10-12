import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            <Link to={'/start'}>
                <button className="bg-yellow-200 px-4 py-1">Conversations</button>
            </Link>
            <button className="bg-indigo-400 px-4 py-1">Login</button>

        </div>
    )
}

export default NavBar
