import React, { useEffect, useState } from 'react'

import Header from '../components/Header/Header'
import Threads from '../components/Threads/Threads'
import Loader from '../components/Loader/Loader'
import Comment from '../components/Comments/Comment'
import api from '../services/services'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'

import { CommentsContent, Back, Post, FormButtons, FormContent, FormInputs } from '../styles/Comments/comments'

export default function Comments({ match }) {
  const id = match.params.id
  const [comments, setComments] = useState(undefined)
  const [data, setData] = useState(undefined)

  const token = localStorage.getItem('token')

  const fetchComments = async (id) => {
    const response = await api.get(`/api/post/${id}`)
    setData(response.data)
    setComments(response.data.comments)
  }

  const handleSubmit = async (values) => {
    try {
      const response = await api.post(
        `/api/post/${id}/comment`,
        { message: values.message },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchComments(id)
  }, [id, comments])

  if (!data) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Back>
        <Link to='/'>
          <FiArrowLeft />
        </Link>
      </Back>
      <CommentsContent>
        <Post>
          <div>
            <h1 className='post-title space'>Post</h1>
            <p className='space'>id:{data.author_id}</p>
            <h2>
              <span>Message:</span> {data.message}
            </h2>
          </div>
        </Post>

        {comments ? (
          comments.map((comment, index) => {
            return <Comment message={comment.comment.message} id={comment.author_id} key={index} />
          })
        ) : (
          <></>
        )}
        <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form>
              <FormContent>
                <FormInputs>
                  <p>Create Comment</p>
                  <input name='message' placeholder='Message Post' className='inputs' onChange={handleChange} />
                  {errors.message && touched.message && errors.message}
                </FormInputs>
                {token ? (
                  <FormButtons>
                    <button type='submit' className='form-button'>
                      Create
                    </button>
                  </FormButtons>
                ) : (
                  <FormButtons>
                    <Link to='/login' className='form-button'>
                      Login
                    </Link>
                  </FormButtons>
                )}
              </FormContent>
            </Form>
          )}
        </Formik>
      </CommentsContent>
      <Threads />
    </>
  )
}
