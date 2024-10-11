import React, { useContext, useState, useEffect } from 'react'
import { FetchContext } from '../context/FetchContext'
import { useParams, Link } from 'react-router-dom'

const CompleteDetailPage = () => {
    const { fetchStartDetail, fetchCompleteDetail, completeDetail } = useContext(FetchContext)
    const { ids, idc } = useParams()

    useEffect(() => {
        fetchStartDetail(ids, idc)
        fetchCompleteDetail(ids, idc)

    }, [ids, idc])

    return (
        <div>
            Complete Detail Page
            <h1>{completeDetail.body}</h1>
            <h3>{completeDetail.start}</h3>

        </div>
    )
}

export default CompleteDetailPage
