import React, { useContext } from 'react'
import { FetchContext } from '../context/FetchContext'

const HomePage = () => {
    const { startList } = useContext(FetchContext)

    return (
        <div>
            Home Page


        </div>
    )
}

export default HomePage
