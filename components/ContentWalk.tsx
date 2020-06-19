import React from 'react'
import {AnimatedCircularProgress} from 'react-native-circular-progress'
import theme from '../theme'
import Label from './Label'

function ContentWalk() {
  return (
    <AnimatedCircularProgress
      size={120}
      width={18}
      fill={50}
      lineCap="round"
      rotation={0}
      backgroundColor={theme.colors.walkProgressBackground}
      tintColor={theme.colors.walkProgressColor}>
      {(fill) => (
        <>
          <Label text={`${Math.round(fill)}`} fontFamily="bold" />
          <Label text="Steps" fontFamily="light" />
        </>
      )}
    </AnimatedCircularProgress>
  )
}

export default ContentWalk
