import 'react-native-gesture-handler'
import Navigation from './navıgator'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs()

const App = () => {
  return (
    
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ThemeProvider>
  
  )
}

export default App
