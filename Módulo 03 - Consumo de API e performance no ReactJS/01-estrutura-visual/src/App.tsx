import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
