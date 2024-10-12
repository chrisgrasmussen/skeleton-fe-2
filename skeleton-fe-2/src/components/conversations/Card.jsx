import React, { useContext } from 'react'
import { FetchContext } from '../../context/FetchContext'
import { useNavigate } from 'react-router-dom'

const Card = () => {
    const { startList, fetchStartDetail, setStartId } = useContext(FetchContext)
    const navigate = useNavigate()

    const handleClick = (id) => {
        setStartId(id)
        fetchStartDetail(id)
        navigate(`/start/${id}`)
    }

    return (
        <div className="flex flex-col justify-center">
            {
                startList.map((start) => (
                    <div key={start.id} onClick={() => handleClick(start.id)} className="border pb-1 rounded-lg w-[600px] hover-pointer flex flex-col items-center">
                        <div className="text-lg py-3 " key={start.id}>
                            {start.title}
                        </div>
                        <button className="bg-indigo-400 hover:bg-indigo-500 text-white text-xs rounded-lg px-4 py-1">
                            See More Details
                        </button>
                    </div>
                ))
            }
        </div>
    )

}

export default Card
