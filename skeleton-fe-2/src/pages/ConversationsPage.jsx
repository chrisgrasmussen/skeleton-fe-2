import React, { useContext } from 'react'
import { FetchContext } from '../context/FetchContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Heading from '../components/conversations/Heading.jsx'
import Body from '../components/conversations/Body.jsx'
import Card from '../components/conversations/Card.jsx'
import NavBar from '../components/app/NavBar.jsx'

const ConversationsPage = () => {
    const { startList, fetchStartDetail, setStartId } = useContext(FetchContext)
    const navigate = useNavigate()


    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <Heading />
            <Body />
        </div>
    )
}

export default ConversationsPage
