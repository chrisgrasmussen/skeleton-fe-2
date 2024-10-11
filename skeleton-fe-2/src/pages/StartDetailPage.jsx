import React, { useContext, useState, useEffect } from 'react'
import { FetchContext } from '../context/FetchContext'
import { useParams, Link } from 'react-router-dom'

const StartDetailPage = () => {
    const { startDetail, completeList, fetchStartDetail, fetchCompleteList } = useContext(FetchContext)
    const { ids } = useParams()

    useEffect((id) => {
        fetchStartDetail(ids)
        fetchCompleteList(ids)
    }, [ids])

    return (
        <div>
            Start Detail Page
            <h1>Start Id: {ids}</h1>
            {startDetail.title}
            {
                completeList.map((complete) => (
                    <Link to={`/start/${ids}/complete/${complete.id}`}>
                        <div key={complete.id}>
                            <div className="pr-5">
                                {complete.body}
                                <button className="bg-slate-200 p-1">More info</button>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default StartDetailPage
