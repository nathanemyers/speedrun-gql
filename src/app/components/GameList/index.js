import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import query from './fetchGames.graphql'

import GameList from './GameList'

export default function ConnectedGameList() {
  const { loading, error, data } = useQuery(query)

  if (loading) {
    return <p>Loading...</p>
  } 
  if (error)  {
    return <p>Error :(</p>
  }

  return <GameList games={data.games} />
}
