import { View, Text } from 'react-native'
import Button from './button'
import theme from '../utils/theme'
import { Bookmark, RotateCcw, Search } from './icons'
import Box from './box'
function TabBar({ state, descriptors, navigation }) {
  return (
    <Box
    pb={20}
      flexDirection="row"
      bg="white"
      style={{
        shadowOpacity: 0.1,
        shadowRadius: 24,
        shadowColor: '#000',
        
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        return label === 'Search' ? (
          <Box key={label} p={15} mt={-15} bg="white" borderRadius="full">
            <Button borderRadius="full" size={56} bg="red" onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            flexDirection="column"
            pt={6}
            height={56}
            flex={1}
            onPress={onPress}
          >
            {label === 'History' && (
              <RotateCcw
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label === 'Favorite' && (
              <Bookmark
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Box
              size={4}
              bg={isFocused ? 'red' : 'white'}
              mt={6}
              borderRadius="full"
            />
          </Button>
        )
      })}
    </Box>
  )
}

export default TabBar
