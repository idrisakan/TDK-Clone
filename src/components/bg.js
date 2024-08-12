import { ImageBackground } from 'react-native'
import * as React from 'react'
import Box from './box'


const Bg = ({children, ...props}) => {
  return (
    <Box
      as={ImageBackground}
      source={require('./../assets/bg.jpg')}
      style={{ width: '100%', height: ' 100%' }}

      {...props}
    >
     
      {children}
    </Box>
  )
}

export default Bg
