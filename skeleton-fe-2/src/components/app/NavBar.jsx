import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            <Link to={'/start'}>
                <button className="bg-yellow-200 hover:bg-yellow-300 px-4 py-1">Conversations</button>
            </Link>
            <button className="bg-indigo-400 hover:bg-indigo-500 px-4 py-1 text-white">Login</button>

        </div>
    )
}

export default NavBar
