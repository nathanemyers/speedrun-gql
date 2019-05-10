import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Query } from "react-apollo"

import FETCH_CATEGORIES from '../graphql/fetchCategories'
import AddCategory from '../components/AddCategory'


const Container = styled.div`

`

const List = styled.ul`

`

const ListItem = styled.li`

`

export default function Categories() {
  return (
    <Container>
      <AddCategory />
      <Query query={FETCH_CATEGORIES} >
          {({loading, data, error}) => {
            if (loading) {
              return <h3>LOADING....</h3>
            }
            if (error) {
              return <h3>ERROR</h3>
            }


            const links = data.categories.map(category => (
              <ListItem key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
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
