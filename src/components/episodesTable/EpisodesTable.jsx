import React from "react";

import Table from "react-bootstrap/Table";

import "../episodesTable/EpisodesTable.css";

export const EpisodesTable = ({episode}) => {
  function formatedDate(item){
    const fecha = new Date(item).toLocaleString()
    return fecha
  }
  return (
    <Table striped bordered hover variant="dark" responsive>
    <thead className="container-fluid">
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Publicado</th>
        <th>Episodio</th>
        <th>Creado</th>
      </tr>
    </thead>
    <tbody className="container-fluid">
      {
        episode.map((item,index) => {
          return(
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.air_date}</td>
            <td>{item.episode}</td>
            <td>{formatedDate(item.created)}</td>
          </tr>)
        })
      }
      
    </tbody>
  </Table>
  );
};
