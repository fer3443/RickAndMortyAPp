import React, {  useEffect,  useState } from "react";

import { getEpisodeByUrl } from "../../services/ApiService";
import Table from "react-bootstrap/Table";

export const CharacterDetailEpisodes = ({ episodes }) => {
  const [ data1, setData1] = useState([])

  useEffect(() => {
   async function fetchData(array){
    const arrayElementos = [];

    for (const item of array) {
      try {
        const res = await getEpisodeByUrl(item);
        arrayElementos.push(res);
      } catch (err) {
        console.error(err);
      }
    }

    setData1(arrayElementos);
   }
   fetchData(episodes)
  }, [])
  
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
          data1.map((elemento, index) => {
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
