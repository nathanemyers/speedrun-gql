import React from 'react'
import styled from 'styled-components'

import AddGame from '../components/AddGame'
import GameList from '../components/GameList'

const Container = styled.div`

`

export default function Games() {
  return (
    <Container>
      <AddGame />
      <GameList />
    </Container>
  )
}
