import React from 'react'

import { Formik, Form } from 'formik'

import { LoginForm, BackPage, FormContent, FormInputs, FormButtons } from '../styles/CreatePost/createPost'

import api from '../services/services'

import { useHistory, Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

export default function CreatePost() {
  const history = useHistory()
  const token = localStorage.getItem('token')

  const handleSubmit = async (values) => {
    try {
      const response = await api.post(
        '/api/post',
        { message: values.message },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      if (response) {
        history.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoginForm>
      <BackPage>
        <Link to='/' className='back-page'>
          <FiArrowLeft className='icon-back' />
        </Link>
      </BackPage>
      <Formik initialValues={{ message: '' }} onSubmit={handleSubmit}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form>
            <FormContent>
              <div className='input-content'>
                <p>CreatePost</p>
                <FormInputs>
                  <input name='message' placeholder='Message Post' className='inputs' onChange={handleChange} />
                  {errors.message && touched.message && errors.message}
                </FormInputs>
              </div>
              <FormButtons>
                <button type='submit' className='form-button'>
                  Create
                </button>
              </FormButtons>
            </FormContent>
          </Form>
        )}
      </Formik>
    </LoginForm>
  )
}
