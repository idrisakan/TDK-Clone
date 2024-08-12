import styled from 'styled-components'
import { TextInput } from 'react-native'
import {
  color,
  compose,
  size,
  space,
  typography,
  shadow,
  borderRadius
} from 'styled-system'
import theme from '../utils/theme'

const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999'
}))(compose(borderRadius, typography, space, color, size, shadow))
export default Input
