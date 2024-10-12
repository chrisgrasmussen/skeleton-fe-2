import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FetchContext } from '../../context/FetchContext'

const Body = () => {
    const { startDetail, completeList, fetchStartDetail, fetchCompleteList } = useContext(FetchContext)
    const { ids } = useParams()

    useEffect(() => {
        fetchStartDetail(ids)
        fetchCompleteList(ids)
    }, [ids])

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className="text-3xl pb-5">{startDetail.title}</h1>
            {
                completeList.map((complete) => (
                    <Link key={complete.id} to={`/start/${ids}/complete/${complete.id}`}>
                        <div>
                            <div className="flex flex-col border rounded-lg justify-center items-center py-4 w-[600px] pr-5">
                                <p className='pb-2'>{complete.body}</p>
                                <button className="bg-indigo-400 hover:bg-indigo-500 text-white text-xs rounded-2xl px-4 py-1">See Details</button>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}

export default Body
