import React from 'react'
import {Sleep} from '../assets'
import styled from 'styled-components'
import {View} from 'react-native'
import Label from './Label'
import Space from './Space'

function ContentSleep() {
  return (
    <Container>
      <ColumnA>
        <Space mt="large">
          <Label
            text="25"
            color="textGrey"
            fontFamily="bold"
            fontSize="large"
          />
          <Label
            text="Scores"
            color="textGrey"
            fontFamily="light"
            fontSize="medium"
          />
        </Space>
      </ColumnA>
      <ColumnB>
        <Space mb="medium">
          <Sleep width="70" height="70" />
        </Space>
      </ColumnB>
    </Container>
  )
}

export default ContentSleep

const Container = styled(View)`
  flex-direction: row;
`
const ColumnA = styled(View)`
  justify-content: flex-end;
  align-items: flex-start;
`
const ColumnB = styled(View)`
  justify-content: flex-start;
`
