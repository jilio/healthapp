import React, {ReactNode} from 'react'
import {View} from 'react-native'
import styled from 'styled-components'
import {space, SpaceProps} from 'styled-system'
import {Space as TSpace, Theme} from '../theme'

interface Props extends SpaceProps<Pick<Theme, 'space'>, TSpace> {
  children?: ReactNode
}

function Space(props: Props) {
  const {children} = props
  return <StyledView {...props}>{children}</StyledView>
}

export default Space

const StyledView = styled(View)`
  ${space};
`
