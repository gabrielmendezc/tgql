import React, { FC, useState, FormEvent } from 'react'
import * as SC from '../Home/styles'
import { Link } from 'react-router-dom'
import Input from '../Input'
import useError from '../../hooks/useError'
import { useMutation, useApolloClient } from 'react-apollo'
import { LOGIN } from '../../queries'

const Login: FC = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const [login, { data, loading, error }] = useMutation(LOGIN)
  const { Component: ErrorComponent } = useError(error)
  const client = useApolloClient()

  const handleChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login({ variables: { data: loginData } })
    } catch {}
  }

  const { username, password } = loginData

  if (data) {
    const {
      login: { token }
    } = data
    localStorage.setItem('token', token)
    client.writeData({ data: { isLoggedIn: true } })
  }

  return (
    <SC.Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={username}
        name="username"
        isOnWhiteBackground
        type="text"
        placeholder="Username"
        required
      />
      <Input
        onChange={handleChange}
        value={password}
        name="password"
        isOnWhiteBackground
        type="password"
        placeholder="Password"
        required
      />
      <p style={{ textAlign: 'left' }}>{error && ErrorComponent}</p>
      <button type="submit">Log in</button>
      <Link to="/auth/forgot-password">Forgot your password?</Link>
      <div className="or">
        <div></div>
        <small>OR</small>
        <div></div>
      </div>
    </SC.Form>
  )
}

export default Login
