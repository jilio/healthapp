import React from 'react'
import {SafeAreaView, StatusBar, View} from 'react-native'
import styled, {ThemeProvider} from 'styled-components'
import Card from './components/Card'
import ContentPulse from './components/ContentPulse'
import ContentSleep from './components/ContentSleep'
import ContentWalk from './components/ContentWalk'
import Label from './components/Label'
import Navbar from './components/Navbar'
import ProfileImage from './components/ProfileImage'
import Space from './components/Space'
import ContentWater from './components/ContentWater'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Space mx="large" mt="medium">
          <HeaderRow>
            <ProfileImage
              uri="https://sun9-11.userapi.com/c638425/v638425918/29d7b/cXf1qE84xlE.jpg"
              size={60}
            />
          </HeaderRow>
          <Space my="medium">
            <Label text="Welcome Back!" color="textRed" />
          </Space>
          <Space my="medium">
            <Label text="Jilio Stories" fontSize="large" fontFamily="bold" />
          </Space>
          <Space my="medium">
            <Label text="Your Activity" color="textYellow" />
          </Space>
          <Row>
            <Column mr="small">
              <Space my="small">
                <Card color="cardRed" title="Water">
                  <ContentWater />
                </Card>
              </Space>
              <Space my="small">
                <Card title="Heart Beats">
                  <ContentPulse />
                </Card>
              </Space>
            </Column>
            <Column ml="small">
              <Space my="small">
                <Card title="Sleep">
                  <ContentSleep />
                </Card>
              </Space>
              <Space my="small">
                <Card color="cardGrey" title="Walk">
                  <ContentWalk />
                </Card>
              </Space>
            </Column>
          </Row>
        </Space>
        <Navbar />
      </Container>
    </ThemeProvider>
  )
}

export default App

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
`
const HeaderRow = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`
const Row = styled(View)`
  flex-direction: row;
`
const Column = styled(Space)`
  flex: 1;
  flex-direction: column;
`
