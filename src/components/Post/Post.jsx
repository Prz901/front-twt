import React from 'react'

import { PostContent } from './style'

import { Link } from 'react-router-dom'

export default function Post({ author_id, comments, message, id }) {
  return (
    <Link to={`comments/${id}`}>
      <PostContent>
        <div className='content'>
          <p>Author: {author_id}</p>
          <p>Message: {message}</p>
          {comments !== undefined ? <p className='comments'>comments: {comments.length}</p> : <></>}
        </div>
      </PostContent>
    </Link>
  )
}
