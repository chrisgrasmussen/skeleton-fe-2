import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {

    const createStart = (data) => {

        const postData = {
            "title": data.title,
        };

        axios.post('https://skeleton-a70q.onrender.com/api/start/', postData, {
            headers: {
                'Content-Type': 'application/json', // Set the content type
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const createComplete = (data) => {

        const postData = {
            "body": data.body,
            "start": data.start,
        };

        axios.post(`https://skeleton-a70q.onrender.com/api/start/${data.start}/complete/`, postData, {
            headers: {
                'Content-Type': 'application/json', // Set the content type
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const editStart = (data) => {
        axios.put(`https://skeleton-a70q.onrender.com/api/start/${data.id}/`, data)
            .then(response => {
                console.log('Update successful:', response.data);
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };


    return (<PostContext.Provider value={{ createStart, createComplete, editStart }}>
        {children}
    </PostContext.Provider>
    )
}

export default PostContextProvider
