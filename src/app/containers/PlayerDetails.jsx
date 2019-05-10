import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { gql } from "apollo-boost"
import { Query } from "react-apollo"

const query = gql`
query Player($playerID: String!){
  player(id: $playerID) {
    name
    id
  }
}
`

const Container = styled.div`

`

const List = styled.ul`

`

const ListItem = styled.li`

`

export default function PlayerDetails(props) {
  const {
    match,
  } = props

  const playerID = match.params.id

  return (
    <Query query={query} variables={{ playerID }} >
        {({loading, data, error}) => {
          if (loading) {
            return <h3>LOADING....</h3>
          }
          if (error) {
            return <h3>ERROR</h3>
          }

          const { player } = data

          return (
            <Container>
              <h3>{player.name}</h3>
            </Container>
          )
        }}
    </Query>
  )
}
