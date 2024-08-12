import styled from 'styled-components';
import {color, compose, size,space,flexbox,layout,borderRadius,position} from 'styled-system';
import {TouchableOpacity} from 'react-native';

const Button = styled(TouchableOpacity)(
  compose(
    position,
    color,
     size,
     space,
     flexbox,
     layout,
     borderRadius,
    ));
    Button.defaultProps={
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
export default Button;