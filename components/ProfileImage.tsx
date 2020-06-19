import React from 'react'
import FastImage from 'react-native-fast-image'

interface Props {
  uri: string
  size: number
}

function ProfileImage(props: Props) {
  const {size = 0, uri} = props

  return (
    <FastImage
      source={{uri}}
      style={{width: size, height: size, borderRadius: size / 2}}
    />
  )
}

export default ProfileImage
