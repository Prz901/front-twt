import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, Login, CommentsPage, CreatePost, SignUp, Page404 } from './pages'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/create-post' component={CreatePost} />
        <Route exact path='/comments/:id' component={CommentsPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='*' component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}
