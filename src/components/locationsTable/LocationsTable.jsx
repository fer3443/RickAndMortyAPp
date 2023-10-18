import React from "react";
import Table from "react-bootstrap/Table";

import "../locationsTable/LocationsTable.css";
import { Link } from "react-router-dom";
export const LocationsTable = ({ location }) => {
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th><p className="thColor">#</p></th>
          <th><p className="thColor">Nombre</p></th>
          <th><p className="thColor">Tipo</p></th>
          <th><p className="thColor">Dimension</p></th>
          <th><p className="thColor">Residentes</p></th>
        </tr>
      </thead>
      <tbody>
        {location.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.dimension}</td>
              <td>
                <button className="buttonYw2"><Link to={`/locations/${item.id}`} className="linkTO">
                  ver mas
                </Link></button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
