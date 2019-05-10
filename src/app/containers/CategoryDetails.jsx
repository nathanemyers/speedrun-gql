import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { gql } from "apollo-boost"
import { Query } from "react-apollo"

const query = gql`
query Category($categoryID: String!){
  category(id: $categoryID) {
    name
    id
    games {
      name
      id
    }
  }
}
`

const Container = styled.div`

`

const List = styled.ul`

`

const ListItem = styled.li`

`

export default function CategoryDetails(props) {
  const {
    match,
  } = props

  const categoryID = match.params.id

  return (
    <Query query={query} variables={{ categoryID }} >
        {({loading, data, error}) => {
          if (loading) {
            return <h3>LOADING....</h3>
          }
          if (error) {
            return <h3>ERROR</h3>
          }

          const { category } = data

          const games = category.games.map(game => (
            <ListItem key={game.id}>
              <Link to={`/game/${game.id}`}>{game.name}</Link>
            </ListItem>
          ))


          return (
            <Container>
              <h3>{category.name}</h3>
              <List>
                  { games }
              </List>
            </Container>
          )
        }}
    </Query>
  )
}
