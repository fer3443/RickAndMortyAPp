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
          <th>Tipo</th>
          <th>Dimension</th>
					<th>Residentes</th>
        </tr>
      </thead>
      <tbody>
				{
					location.map((item,index) => {
						return(
						<tr key={index}>
							<td>{item.id}</td>
							<td>Nombre: {item.name}</td>
							<td>Tipo: {item.type}</td>
							<td>Dimensión: {item.dimension}</td>
							<td><button className='buttonYw2'>ver mas</button></td>
						</tr>)
					})
				}
        
      </tbody>
    </Table>
  )
}
