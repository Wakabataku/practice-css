import React from 'react'
import { GlobalStyle } from './shared/reset'
import StandardLayout from './components/StandardLayout/StandardLayout'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StandardLayout />
    </React.Fragment>
  )
}

export default App
