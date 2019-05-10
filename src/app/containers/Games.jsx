import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Query } from "react-apollo"

import FETCH_GAMES from '../graphql/fetchGames'
import AddGame from '../components/AddGame'


const Container = styled.div`

`

const List = styled.ul`

`

const ListItem = styled.li`

`

export default function Games() {
  return (
    <Container>
      <AddGame />
      <Query query={FETCH_GAMES} >
          {({loading, data, error}) => {
            if (loading) {
              return <h3>LOADING....</h3>
            }
            if (error) {
              return <h3>ERROR</h3>
            }


            const links = data.games.map(game => (
              <ListItem key={game.id}>
                <Link to={`/game/${game.id}`}>{game.name}</Link>
              </ListItem>
            ))

            return (
              <List>
                  { links }
              </List>
            )
          }}
      </Query>
    </Container>
  )
}
