import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
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

const Container = styled.div`

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

          const { game } = data

          const categories = game.categories.map(category => (
            <ListItem key={category.id}>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </ListItem>
          ))


          return (
            <Container>
              <h3>{game.name}</h3>
              <List>
                  { categories }
              </List>
            </Container>
          )
        }}
    </Query>
  )
}
