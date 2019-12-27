import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default function GameLink({name, id}) {
  return (
    <Link to={`/game/${id}`}>{name}</Link>
  )
}

GameLink.propTypes = propTypes