import React from 'react'
import { GlobalStyle } from './shared/reset'
import StandardLayout from './components/StandardLayout/StandardLayout'
import SinglePage from './components/SinglePage'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SinglePage />
    </React.Fragment>
  )
}

export default App
