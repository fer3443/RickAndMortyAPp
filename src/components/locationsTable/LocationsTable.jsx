import React from 'react'
import Table from "react-bootstrap/Table";

import '../locationsTable/LocationsTable.css'
import { Link } from 'react-router-dom';
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
							<td>{item.name}</td>
							<td>{item.type}</td>
							<td>{item.dimension}</td>
							<td><Link to={`/locations/${item.id}`} className='buttonYw2'>ver mas</Link></td>
						</tr>)
					})
				}
        
      </tbody>
    </Table>
  )
}
