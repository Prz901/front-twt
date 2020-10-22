import React from 'react'

import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import { LoginPage, LoginContent, LoginForm, BackPage, FormContent, FormInputs, FormButtons } from '../styles/Login/login'

import api from '../services/services'

import { Formik, Form } from 'formik'

export default function SignUp() {
  const history = useHistory()

  const createUser = async (values) => {
    try {
      const response = await api.post('/api/user', {
        username: values.email,
        password: values.password,
        description: values.description,
        handler: values.handler,
      })
      if (response) {
        history.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <LoginPage>
      <LoginContent>
        <LoginForm>
          <BackPage>
            <Link to='/login' className='back-page'>
              <FiArrowLeft className='icon-back' />
            </Link>
          </BackPage>
          <Formik initialValues={{ email: '', password: '', description: '', handler: '' }} onSubmit={createUser}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Form>
                <div className='middle'>
                  <FormContent>
                    <div className='login-title'>
                      <h1>Sign Up</h1>
                      <h2>Sign Up your account</h2>
                    </div>
                    <div>
                      <div className='input-content'>
                        <p>Login</p>
                        <FormInputs>
                          <input type='email' name='email' value={values.email} className='inputs' onChange={handleChange} />
                        </FormInputs>
                      </div>
                      <div className='input-content'>
                        <p>Password</p>
                        <FormInputs>
                          <input
                            type='password'
                            name='password'
                            value={values.password}
                            className='inputs'
                            onChange={handleChange}
                          />
                        </FormInputs>
                      </div>
                      <div className='input-content'>
                        <p>Description</p>
                        <FormInputs>
                          <input
                            type='description'
                            name='description'
                            value={values.description}
                            className='inputs'
                            onChange={handleChange}
                          />
                        </FormInputs>
                      </div>
                      <div className='input-content'>
                        <p>Handler</p>
                        <FormInputs>
                          <input
                            name='handler'
                            placeholder='handler'
                            value={values.handler}
                            className='inputs'
                            onChange={handleChange}
                          />
                        </FormInputs>
                      </div>
                    </div>
                    <FormButtons>
                      <button type='submit' className='form-button'>
                        Sign Up
                      </button>
                    </FormButtons>
                  </FormContent>
                </div>
              </Form>
            )}
          </Formik>
        </LoginForm>
      </LoginContent>
    </LoginPage>
  )
}
