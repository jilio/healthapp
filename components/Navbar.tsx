import React from 'react'
import styled from 'styled-components'
import {CalendarIcon, CheckIcon, MenuIcon} from '../assets'
import Space from './Space'

function Navbar() {
  return (
    <Container mx="large">
      <MenuIcon height="72" width="72" />
      <CheckIcon height="72" width="72" />
      <CalendarIcon height="72" width="72" />
    </Container>
  )
}

export default Navbar

const Container = styled(Space)`
  flex-direction: row;
  justify-content: space-around;
`
