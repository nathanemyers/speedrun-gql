import React, { useRef } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const ADD_GAME = gql`
  mutation AddGame($name: String!) {
    createGame(name: $name) {
      name
      id
    }
  }
`

export default function AddGame() {
  const input = useRef()

  return (
    <Mutation 
      mutation={ADD_GAME}
      refetchQueries={[`fetchGames`]}
    >
      {(addGame, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              addGame({ variables: { name: input.current.value } })
              input.current.value = ""
            }}
          >
            <input
              ref={input}
            />
            <button type="submit">Add Game</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}
