import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FetchContext } from '../../context/FetchContext'
import { PostContext } from '../../context/PostContext'
import Input from './Input.jsx'

const Body = () => {
    const { startDetail, completeList, fetchStartDetail, fetchCompleteList } = useContext(FetchContext)
    const { editStart } = useContext(PostContext)
    const { ids } = useParams()

    useEffect(() => {
        fetchStartDetail(ids)
        fetchCompleteList(ids)
    }, [ids])

    const handleChange = (e) => {
        startDetail.title = e.target.value

    }

    const handleClick = () => {
        let body = {
            "title": startDetail.title,
            "id": ids,
        }
        editStart(body)
    }


    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-row justify-between items-center'>
                <input onChange={handleChange} className=" justify-center w-[500px] text-2xl pl-5 pb-5" placeholder={startDetail.title} />
                <button onClick={handleClick} className='bg-yellow-100 h-10 px-4 py-1 rounded-xl'>Edit</button>
            </div>
            <Input />
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
