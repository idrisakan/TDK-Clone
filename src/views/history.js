import { View, Text, StatusBar} from 'react-native'
import React from 'react'
import Box from '../components/box'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'


const HistoryView = ({data}) => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    },[])
  )
  return (
    <Box as={SafeAreaView} flex={1}>
      <Text >
        Arama Geçmişi
      </Text>
    </Box>
  )
}

export default HistoryView