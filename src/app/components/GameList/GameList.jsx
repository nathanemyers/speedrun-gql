import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GameLink from './GameLink'


const List = styled.ul`

`

const ListItem = styled.li`

`

const propTypes = {
  games: PropTypes.array.isRequired
}

export default function GameList(props) {
  const links = props.games.map(game => (

    <ListItem key={game.id}>
      <GameLink name={game.name} id={game.id} />
    </ListItem>
  ))

  return (
    <List>
      {links}
    </List>
  )
}

GameList.propTypes = propTypes