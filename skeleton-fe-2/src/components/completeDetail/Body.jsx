import React, { useContext, useState, useEffect } from 'react'
import { FetchContext } from '../../context/FetchContext'
import { useParams } from 'react-router-dom'

const Body = () => {
    const { fetchStartDetail, fetchCompleteDetail, completeDetail } = useContext(FetchContext)
    const { ids, idc } = useParams()

    useEffect(() => {
        fetchStartDetail(ids, idc)
        fetchCompleteDetail(ids, idc)

    }, [ids, idc])

    return (
        <div className="flex w-[400px] justify-between items-center pt-10">
            <h1 className="flex items-center justify-center border rounded-2xl w-[300px] py-1">{completeDetail.body}</h1>
            <button className="rounded-full border px-5 bg-indigo-400 hover:bg-indigo-500 py-1 text-white text-sm ">edit</button>
        </div>
    )
}

export default Body
