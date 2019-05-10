import React from 'react'
import styled from 'styled-components'
import { gql } from "apollo-boost"
import { Query } from "react-apollo"

const query = gql`
query Game($gameID: String!){
  game(id: $gameID) {
    name
    id
    categories {
      name
      id
    }
  }
}
`

const List = styled.ul`

`

const ListItem = styled.li`

`

export default function GameDetails(props) {
  const {
    match,
  } = props

  const gameID = match.params.id

  return (
    <Query query={query} variables={{ gameID }} >
        {({loading, data, error}) => {
          if (loading) {
            return <h3>LOADING....</h3>
          }
          if (error) {
            return <h3>ERROR</h3>
          }

          return (
            <div>{data.name}</div>
          )
        }}
    </Query>
  )
}
