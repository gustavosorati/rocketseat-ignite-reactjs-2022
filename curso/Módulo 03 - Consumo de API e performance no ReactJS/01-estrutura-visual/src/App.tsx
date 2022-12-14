import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transactions/indes'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <Transactions />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
