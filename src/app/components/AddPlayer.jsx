import React, { useRef } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const ADD_PLAYER = gql`
  mutation AddPlayer($name: String!) {
    createPlayer(name: $name) {
      name
      id
    }
  }
`

export default function AddPlayer() {
  const input = useRef()

  return (
    <Mutation 
      mutation={ADD_PLAYER}
      refetchQueries={[`fetchPlayers`]}
    >
      {(addPlayer, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              addPlayer({ variables: { name: input.current.value } })
              input.current.value = ""
            }}
          >
            <input
              ref={input}
            />
            <button type="submit">Add Player</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}
