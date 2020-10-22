import React from 'react'

import { Content, Loged, LogedUser, LoginUser, LoginButtons } from './styles'

import { FiLogOut } from 'react-icons/fi'
import { useHistory, Link } from 'react-router-dom'

export default function Threads() {
  const history = useHistory()
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <Content>
      <Loged>
        {token ? (
          <LogedUser>
            <h1>Bem vindo</h1>
            <p
              className='logout'
              onClick={() => {
                handleLogout()
              }}
            >
              Sair
              <FiLogOut className='icon-logout' />
            </p>
          </LogedUser>
        ) : (
          <LoginUser>
            <h1>New on Coffee?</h1>
            <p>Sign up now to get your own personalized timeline!</p>
            <LoginButtons>
              <Link to='/sign-up'>
                <button className='buttons'>Sign Up</button>
              </Link>
              <Link to='/login'>
                <button className='buttons'>Login</button>
              </Link>
            </LoginButtons>
          </LoginUser>
        )}
      </Loged>
    </Content>
  )
}
