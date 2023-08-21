import React from "react";

import Table from "react-bootstrap/Table";

import "../episodesTable/EpisodesTable.css";

export const EpisodesTable = ({episode}) => {
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Publicado</th>
          <th>Episodio</th>
					<th>Creado</th>
        </tr>
      </thead>
      <tbody>
				{
					episode.map((item,index) => {
						return(
						<tr key={index}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.air_date}</td>
							<td>{item.episode}</td>
							<td>{item.created}</td>
						</tr>)
					})
				}
        
      </tbody>
    </Table>
  );
};
