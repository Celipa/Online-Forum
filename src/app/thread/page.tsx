"use client"
import React from 'react'
import { useEffect, useState } from 'react'

type Data = {
    id: string;
    category: string;
    title: string;
    description: string;
    creationDate: string;
  };

function Thread() {

    const [data, setData] = useState<Data>({
        id: '',
        category: '',
        title: '',
        description: '',
        creationDate: ''
    })

    useEffect(() => {
        const key = "2df6d47d-ca0c-4772-93c7-97a5f9e63a26"
        const localData = localStorage.getItem(key)
        const parsedData = localData ? JSON.parse(localData) : null

        setData(parsedData)
    }, [])

    console.log(data)


  return (
    <div className='d-thread'>
        <div className="d-thread-container">
            <div className="d-thread-container-top">
                <span className='d-thread-poster'>Peter</span>
                <h2 className='d-thread-title'>{data.title}</h2>
            </div>
            <div className="d-thread-container-center">
                <p className='d-thread-text'>
                    {data.description}
                </p>
            </div>
            <div className="d-thread-container-bottom">
                <h3>Comments</h3>
                <div className="d-thread-container-bottom-comment">
                    <span className='comment-name'>Pelle</span>
                    <p className='comment-text'>Have you tried feeding him real catfood?</p>    
                </div>
                <div className="d-thread-container-bottom-comment">
                    <span className="comment-name">Kalle</span>
                    <p className="comment-text">Your cat seems dangerous</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Thread