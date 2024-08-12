import React from 'react'
import Box from './box'
import Text from './text'
import Input from './input'
import theme from '../utils/theme'
import { Close, Search } from './icons'

import Button from './button'
import { Keyboard } from 'react-native'

const SearchBox = ({onChangeFocus}) => {
    const [value, setValue] = React.useState('')
  const [isFocus, setFocus] = React.useState(false)

  React.useEffect(() => {
    onChangeFocus(isFocus)
  },[isFocus,onChangeFocus])

  const onCansel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  const onClear = () => {
    setValue('')
  }
  return (
    <Box  flexDirection="row" alignItems="center">
      <Box  position='relative' flex={1}>
      <Input
      /* clearButtonMode='always' */
        style={{
          shadowOpacity: 0.1,
          shadowRadius: 24,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          }
        }}
        bg="white"
        height={52}
        color="textDark"
        borderWidth={1}
        borderColor={isFocus ? "#d1d1d1" : 'transparent'}
        placeholder="Türkçe Sözlükte Ara"
        placeholderTextColor="textMedium"
        borderRadius="normal"
        pl={52}
        value={value}
        onFocus={() => setFocus(true)}
        onChangeText={text => setValue(text)}
      />
      
     {value.length > 0 && (
         <Button onPress={onClear} position="absolute" right={16} top={14}>
         <Close  color={theme.colors.textDark}/>
       </Button>
     )}
      <Button position="absolute" left={16} top={14}>
        <Search color={theme.colors.textMedium} />
      </Button>
      </Box>
      {isFocus && (
        <Button onPress={onCansel} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default SearchBox
