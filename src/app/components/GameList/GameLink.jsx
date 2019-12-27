import React from "react"
import { Link } from "react-router-dom"
//import styled from 'styled-components'

export default function GameLink({name, id}) {
  return (
    <Link to={`/game/${id}`}>{name}</Link>
  ) 
}
