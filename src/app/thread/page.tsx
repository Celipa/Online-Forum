import React from 'react'

function Thread() {
  return (
    <div className='d-thread'>
        <div className="d-thread-container">
            <div className="d-thread-container-top">
                <span className='d-thread-poster'>Peter</span>
                <h2 className='d-thread-title'>My cat ate my homework</h2>
            </div>
            <div className="d-thread-container-center">
                <p className='d-thread-text'>
                    Please help! My cat ate my homework and I don't know what to do. The cat is fat, orange, and doesn't listen to commands.
                     There is no reasoning with the beast. He must be slain swiftly! Only when he is dead and vanquished shall I finally have peace 
                     in my life. My homework will finally stay unbothered and my parents may finally begin to love me.
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