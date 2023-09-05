import React, { useState } from 'react'
import { Characters } from '../components/characters/Characters'
import { CharacterForPage } from './CharacterForPage'
import { Link } from 'react-router-dom'

const CharacterPage = () => {

  const [ page, setPage ] = useState(1)
  return (
    <>
    <div style={{display: "flex", justifyContent: "center"}}>
    <Link to={`/character?page=${page}`}>siguiente</Link>
    </div>
    </>
  )
}

export default CharacterPage