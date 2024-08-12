import { FlatList } from 'react-native'
import React from 'react'
import Text from './text';
import { SimpleCardContainer, SimpleCardTitle } from './simple_card';
import Box from './box';

 function SearchHistoryList({data}) {
  return (
    <FlatList
              style={{ padding: 16 }}
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Box py={6}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              ListHeaderComponent={
                <Text color="textLight" mb={10}>
                  SON ARAMALAR
                </Text>
              }
            />
  )
}

export default SearchHistoryList