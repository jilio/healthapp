import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'
import theme, {Color, FontSize, FontFamily} from '../theme'

interface Props {
  text: string
  color?: Color
  fontSize?: FontSize
  fontFamily?: FontFamily
}

function Label(props: Props) {
  const {text, color, fontSize, fontFamily} = props
  return (
    <StyledLabel color={color} fontSize={fontSize} fontFamily={fontFamily}>
      {text}
    </StyledLabel>
  )
}

export default Label

const StyledLabel = styled(Text)<Omit<Props, 'text'>>`
  color: ${({color}) => theme.colors[color || 'textDefault']};
  font-size: ${({fontSize}) => theme.fontSizes[fontSize || 'medium']};
  font-family: ${({fontFamily}) => theme.fontFamilies[fontFamily || 'regular']};
`
