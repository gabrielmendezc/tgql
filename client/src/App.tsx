import React, { FC, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import AccountSettings from './components/Account/Settings'
import Main from './components/Main'
import PrivateRoute from './components/ProtectedRoute'

const App: FC = () => {
  console.log('hey')
  return (
    <Fragment>
      <Navbar />
      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute
            path="/account/settings"
            exact
            component={AccountSettings}
          />
          <PrivateRoute path="/profile" exact component={Profile} />
          {/* Might change this to a custom 404 component */}
          <Redirect to="/" />
        </Switch>
      </Main>
    </Fragment>
  )
}

export default App
