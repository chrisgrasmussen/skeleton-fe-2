import React, { useContext, useState } from 'react'
import { PostContext } from '../../context/PostContext'

const StartInput = () => {
    const { createStart } = useContext(PostContext)
    const [startText, setStartText] = useState('')

    const handleChange = (e) => {
        setStartText(e.target.value)
        console.log(startText)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const body = {
            "title": startText,
        };
        createStart(body)
    }





    return (
        <div className="flex justify-between py-5 items-center">
            <form>
                <textarea rows={2} className="w-[600px] flex justify-center items-center border px-4 py-1" onChange={handleChange} type="text" placeholder="Start a thought..." />
                <div className='flex flex-col pt-5'>
                    <button className="bg-indigo-400 hover:bg-indigo-500 text-white text-sm justify-center items-center rounded-xl px-4 py-1" type="submit" onClick={handleClick}>Submit</button>

                </div>
            </form>

        </div>
    )
}

export default StartInput
