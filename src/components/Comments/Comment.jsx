import React from 'react'

import { Comment } from './style'

export default function Comments({ author_id, message }) {
  return (
    <Comment>
      <h1 className='post-title space'>Comment</h1>
      <p className=' space'>id: {author_id}</p>
      <p className='space'>message: {message}</p>
    </Comment>
  )
}
