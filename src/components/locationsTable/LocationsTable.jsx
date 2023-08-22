import React from 'react'
import Table from "react-bootstrap/Table";

import '../locationsTable/LocationsTable.css'
export const LocationsTable = ({location}) => {

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
					location.map((item,index) => {
						return(
						<tr key={index}>
							<td>texto</td>
							<td>texto</td>
							<td>texto</td>
							<td>texto</td>
							<td>texto</td>
						</tr>)
					})
				}
        
      </tbody>
    </Table>
  )
}
