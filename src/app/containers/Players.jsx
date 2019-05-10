import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Query } from "react-apollo"

import FETCH_PLAYERS from '../graphql/fetchPlayers'
import AddPlayer from '../components/AddPlayer'

const Container = styled.div`

`

const List = styled.ul`

`

const ListItem = styled.li`

`

export default function Players() {
  return (
    <Container>
      <AddPlayer />
      <Query query={FETCH_PLAYERS} >
          {({loading, data, error}) => {
            if (loading) {
              return <h3>LOADING....</h3>
            }
            if (error) {
              return <h3>ERROR</h3>
            }

            const players = data.players.map(player => (
              <ListItem key={player.id}>
                <Link to={`/player/${player.id}`}>{player.name}</Link>
              </ListItem>
            ))

            return (
              <List>
                  { players }
              </List>
            )
          }}
      </Query>
    </Container>
  )
}
