"use client"
import React from 'react'
import { useEffect, useState } from 'react'

type Comment = {
    content: string;
    creator: "GUEST";
}

type Data = {
    id: string;
    category: string;
    title: string;
    description: string;
    creationDate: string;
    comments: Comment[];
  };

function Thread() {

    const [data, setData] = useState<Data>({
        id: '',
        category: '',
        title: '',
        description: '',
        creationDate: '',
        comments: []
    })
    const [newComment, setNewComment] = useState<string>('')
    
    const key = "2df6d47d-ca0c-4772-93c7-97a5f9e63a26"

    useEffect(() => {
        const localData = localStorage.getItem(key)
        if (localData) {
            const parsedData = JSON.parse(localData)
            
            setData({ ...parsedData, comments: parsedData.comments || [] })
        }
    }, [])

    console.log(data)

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment(e.target.value)
    }

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (newComment.trim() === '') return

        const updatedComments: Comment[] = [
            ...data.comments,
            { content: newComment, creator: "GUEST" }
        ]

        const updatedData = {
            ...data,
            comments: updatedComments,
        };

        setData(updatedData)
        localStorage.setItem(key, JSON.stringify(updatedData))

        setNewComment('')
    }


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
            <div className="d-thread-container-create-comment">
                <form onSubmit={handleCommentSubmit} className='d-thread-container-create-comment'>
                    <div className="d-thread-container-create-comment-input">
                        <label htmlFor="commentField" className='d-thread-label'>Write a comment</label>
                        <input type="text" value={newComment} onChange={handleCommentChange} id='commentField' />
                    </div>
                    <div className="d-thread-container-create-comment-btn">
                        <button type='submit' id='postCommentBtn'>Post</button>
                    </div>
                </form>
            </div>
            <div className="d-thread-container-bottom">
                <h3>Comments</h3>
                {data.comments.map((comment, index) => (
                        <div key={index} className="d-thread-container-bottom-comment">
                            <span className='comment-name'>{comment.creator}</span>
                            <p className='comment-text'>{comment.content}</p>    
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Thread