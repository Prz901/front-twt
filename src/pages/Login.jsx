import React from 'react'
import { LoginPage, LoginContent, LoginForm, FormContent, FormInputs, FormSignIn, FormButtons } from '../styles/Login/login'

import { Formik, Form } from 'formik'

import { Link, useHistory } from 'react-router-dom'

import api from '../services/services'

import ImageForm from '../components/Form/ImageForm'

export default function Login() {
  const history = useHistory()

  const handleSubmit = async (values) => {
    try {
      const response = await api.post('/api/auth', {
        username: values.email,
        password: values.password,
      })
      if (response) {
        window.localStorage.setItem('token', response.data)
        history.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <LoginPage>
      <LoginContent>
        <ImageForm />
        <LoginForm>
          <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Form>
                <div className='middle'>
                  <FormContent>
                    <div className='login-title'>
                      <h1>Login</h1>
                      <h2>Sign in to your account</h2>
                    </div>
                    <div>
                      <div className='input-content'>
                        <p>Login</p>
                        <FormInputs>
                          <input name='email' placeholder='email' className='inputs' onChange={handleChange} />
                          {errors.email && touched.email && errors.email}
                        </FormInputs>
                      </div>
                      <div className='input-content'>
                        <p>Password</p>
                        <FormInputs>
                          <input
                            name='password'
                            type='password'
                            placeholder='password'
                            className='inputs'
                            onChange={handleChange}
                          />
                          {errors.password && touched.password && errors.password}
                        </FormInputs>
                      </div>
                    </div>
                    <FormButtons>
                      <button type='submit' className='form-button'>
                        Log in
                      </button>
                    </FormButtons>
                  </FormContent>
                </div>

                <FormSignIn>
                  <div>
                    Don't have an account?
                    <Link to='/sign-up' className='click'>
                      Sign up
                    </Link>
                  </div>
                </FormSignIn>
              </Form>
            )}
          </Formik>
        </LoginForm>
      </LoginContent>
    </LoginPage>
  )
}
