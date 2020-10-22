import React, { useEffect, useState } from 'react'

import { HomeContent, HomePosts, CreatePost } from '../styles/Home/home'

import Header from '../components/Header/Header'
import Threads from '../components/Threads/Threads'
import Post from '../components/Post/Post'
import Loader from '../components/Loader/Loader'

import { Link } from 'react-router-dom'
import api from '../services/services'

export default function Home() {
  const [posts, setPosts] = useState(undefined)

  const fetchPosts = async () => {
    const response = await api.get('/api/post')
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  if (!posts) {
    return <Loader />
  }

  return (
    <HomeContent>
      <Header />
      <HomePosts>
        <CreatePost>
          {localStorage.getItem('token') ? (
            <Link to='/create-post'>
              <p className='create'>Create Post</p>
            </Link>
          ) : (
            <Link to='/login'>
              <p className='create'>Create Post</p>
            </Link>
          )}
        </CreatePost>
        {posts.map((post) => {
          return <Post author_id={post.author_id} message={post.message} comments={post.comments} id={post._id} key={post._id} />
        })}
      </HomePosts>
      <Threads />
    </HomeContent>
  )
}
