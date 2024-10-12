import React, { useContext, useState, useEffect } from 'react'
import { FetchContext } from '../context/FetchContext'
import { useParams, Link } from 'react-router-dom'
import Heading from '../components/completeDetail/Heading.jsx'
import Body from '../components/completeDetail/Body.jsx'

const CompleteDetailPage = () => {

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <Heading />
            <Body />
        </div>
    )
}

export default CompleteDetailPage
