import React, {ReactNode} from 'react'
import {View} from 'react-native'
import styled from 'styled-components'
import theme, {Color} from '../theme'
import Label from './Label'
import Space from './Space'

interface Props {
  color?: Color
  title: string
  children?: ReactNode
}

function Card(props: Props) {
  const {color = 'cardWhite', title, children} = props

  let textColor: Color = 'textDefault'
  switch (color) {
    case 'cardWhite':
      textColor = 'textGrey'
      break
    default:
      textColor = 'textDefault'
      break
  }

  return (
    <Container color={color}>
      <Space mx="medium" mt="medium">
        <Label text={title} color={textColor} fontFamily="bold" />
      </Space>
      <Content m="medium" mb="medium">
        {children}
      </Content>
    </Container>
  )
}

export default Card

const Container = styled(View)<Pick<Props, 'color'>>`
  background-color: ${({color}) => theme.colors[color ?? 'cardWhite']};
  border-radius: ${theme.space.medium};
`
const Content = styled(Space)`
  justify-content: center;
  align-items: center;
`
