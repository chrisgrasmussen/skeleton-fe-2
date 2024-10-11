import React, { useContext } from 'react'
import { FetchContext } from '../context/FetchContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ConversationsPage = () => {
    const { startList, fetchStartDetail, setStartId } = useContext(FetchContext)
    const navigate = useNavigate()

    const handleClick = (id) => {
        setStartId(id)
        fetchStartDetail(id)
        navigate(`/start/${id}`)
    }

    return (
        <div>
            Conversations Page
            {
                startList.map((start) => (
                    <div className="py-3" key={start.id}>
                        {start.title}
                        <Link to={`/start/${start.id}`} >
                            <button onClick={() => handleClick(start.id)} className="bg-slate-200 p-1">See More Details</button>
                        </Link>
                    </div>

                ))
            }

        </div>
    )
}

export default ConversationsPage
