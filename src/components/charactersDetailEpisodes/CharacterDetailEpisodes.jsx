import React, {  useEffect,  useState } from "react";

import { getEpisodeByUrl } from "../../services/ApiService";
import Table from "react-bootstrap/Table";

export const CharacterDetailEpisodes = ({ episodes }) => {
  const [ load, setLoad ] = useState(false)
  const [newEpisode, setNewEpisode] = useState([]);
  

  async function splitEpisodes(episodes){
    const nuevoArray = []
    await episodes.map(item => {
      return(
        nuevoArray.push(item)
      )
    })
    return nuevoArray
  }
useEffect(() => {
  splitEpisodes(episodes)
  .then(res => {
    const arrayElemento = []
    res.map(item => {
      getEpisodeByUrl(item)
      .then(resp =>  {
        arrayElemento.push(resp),
        setNewEpisode(arrayElemento)
      })
      .catch(error => console.log(error))
    })
  })
  .catch(err => console.log(err))
}, [])
//sigo con problemas para renderizar los capitulos
// useEffect(() => {
//   if(newEpisode != undefined){
//     newEpisode.map(item => {
//       return (
//         getEpisodeByUrl(item)
//         .then(res => {
//           arrayElemento.push(res)
//           setElemento(...arrayElemento)
//           console.log(res)
//         })
//         .catch(err => console.log(err))
//       )
//     })
//   }
// }, [])

  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Episodio</th>
        </tr>
      </thead>
      <tbody>
        {
          newEpisode.map((elemento, index) => {
            return(
              <tr key={index}>
          <td>{elemento.name}</td>
          <td>{elemento.episode}</td>
        </tr>
            )
          })
        }
      </tbody>
    </Table>
  );
};
