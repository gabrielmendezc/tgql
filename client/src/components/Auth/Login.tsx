import React, { FC, useState, FormEvent } from 'react'
import * as SC from './styles'
import { Link, useHistory } from 'react-router-dom'
import Input from '../Input'
import { useMutation } from 'react-apollo'
import { LOGIN } from '../../graphql/mutations'
import { ME } from '../../graphql/queries'
import { setAccessToken } from '../../utils/accessToken'
import { FormGroup } from '../Input/styles'
import Loader from '../Loader'

const Login: FC = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const [login, { loading }] = useMutation(LOGIN)
  const history = useHistory()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const { username, password } = loginData

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const response = await login({
      variables: {
        username,
        password
      },
      update: (store, { data }) => {
        if (!data) {
          return null
        }

        store.writeQuery({
          query: ME,
          data: {
            me: data.login.user
          }
        })
      }
    })
    if (response && response.data) {
      setAccessToken(response.data.login.accessToken)
    }

    history.push('/')
  }

  console.log(loading)

  return (
    <SC.AuthWrapper>
      <h1>Welcome back!</h1>
      <p>We're so glad to see you again!</p>
      <SC.LoginForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="username">Username</label>
          <Input
            onChange={handleChange}
            value={username}
            name="username"
            id="username"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            onChange={handleChange}
            value={password}
            name="password"
            id="password"
            type="password"
            required
          />
        </FormGroup>
        <Link to="/auth/forgot-password">Forgot your password?</Link>
        <button type="submit">{loading ? <Loader /> : 'Log in'}</button>
        <div>
          <span>Don't have an account?</span>{' '}
          <Link to="/register">Register</Link>
        </div>
      </SC.LoginForm>
    </SC.AuthWrapper>
  )
}

export default Login
