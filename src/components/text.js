import styled from 'styled-components'
import { Text as T } from 'react-native'
import { color, compose, size, space, typography } from 'styled-system'

const Text = styled(T)(compose(color, size, space, typography))
export default Text
