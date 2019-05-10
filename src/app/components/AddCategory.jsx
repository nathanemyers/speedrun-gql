import React, { useRef } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const ADD_CATEGORY = gql`
  mutation AddCategory($name: String!) {
    createCategory(name: $name) {
      name
      id
    }
  }
`

export default function AddCategory() {
  const input = useRef()

  return (
    <Mutation 
      mutation={ADD_CATEGORY}
      refetchQueries={[`fetchCategories`]}
    >
      {(addCategory, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              addCategory({ variables: { name: input.current.value } })
              input.current.value = ""
            }}
          >
            <input
              ref={input}
            />
            <button type="submit">Add Category</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}
