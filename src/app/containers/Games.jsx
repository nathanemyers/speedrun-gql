import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Query } from "react-apollo"

import fetchGamesQuery from '../graphql/fetchGames'


const List = styled.ul`

`

const ListItem = styled.li`

`

export default function Games() {
  return (
    <Query query={fetchGamesQuery} >
        {({loading, data, error}) => {

          let links

          if (!loading) {
            links = data.games.map(game => (
              <ListItem key={game.id}>
                <Link to={`/game/${game.id}`}>{game.name}</Link>
              </ListItem>
            ))
          }

          return (
            <List>
                { links }
            </List>
          )
        }}
    </Query>
  )
}
