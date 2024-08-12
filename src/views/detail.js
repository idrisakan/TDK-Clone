import { ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Box from '../components/box'
import Text from '../components/text'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'
import ActionButton from '../components/action-button'
import { Favorite, Hand, Sound } from '../components/icons'
import { ActionButtonTitle } from '../components/action-button'
import theme from '../utils/theme'
import DetailSummaryItem from '../components/detail_summary_items'
import LoaderText from '../components/LoaderText'

const DetailView = ({ route }) => {
  const keyword = route.params?.keyword
  //const keyword = 'milliyet'

  const [data, setData] = React.useState(null)
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()
    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text mt={6} color="textLight">
              {data?.telaffuz && data?.telaffuz} {data?.lisan}
            </Text>
          ) : null}
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data}>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={12} disabled={!data}>
            <Favorite width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml="auto" disabled={!data}>
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map((item) => (
                <DetailSummaryItem
                  key={item.anlam_sira}
                  border={item.anlam_sira !== '1'}
                  data={item}
                />
              ))
            : [1, 2, 3].map(index => (
                <DetailSummaryItem key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItem>
              ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView
