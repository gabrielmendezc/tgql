import React, { FC, useState, useEffect, Fragment } from 'react'
import Routes from './components/Routes'
import Loader from './components/Loader'
import { useHistory } from 'react-router-dom'
import NavbarUnauth from './components/Navbar/Unauth'
import { setAccessToken } from './utils/accessToken'
interface Props {}

const App: FC<Props> = () => {
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    ;(async () => {
      try {
        const data = await fetch('http://localhost:4000/refresh_token', {
          method: 'POST',
          credentials: 'include'
        })
        const { accessToken } = await data.json()
        setAccessToken(accessToken)
        if (!accessToken) {
          setLoading(false)
          history.push('/login')
        }
        setLoading(false)
      } catch {
        setLoading(false)
        history.push('/login')
      }
    })()
  }, [history])

  if (loading) {
    return (
      <Fragment>
        <NavbarUnauth />
        <div id="initial-loader">
          <Loader />
        </div>
      </Fragment>
    )
  }

  return <Routes />
}

export default App
