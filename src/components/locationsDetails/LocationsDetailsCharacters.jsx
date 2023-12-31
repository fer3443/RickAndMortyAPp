import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCharactersByUrl,
} from "../../services/ApiService";

import "../locationsDetails/LocationsDetails.css";

export const LocationsDetailsCharacters = ({ personajes }) => {
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([]);
  const [ loading, setLoading] = useState(false);
  useEffect(() => {
    
    async function fetchData(array) {
      const arrayElementos = [];
      const arrayColores = [];

      for (const item of array) {
        try {
          setLoading(true)
          const res = await getCharactersByUrl(item);
          arrayElementos.push(res);

          switch (res.status) {
            case "Alive":
              arrayColores.push("green");
              break;
            case "Dead":
              arrayColores.push("red");
              break;
            default:
              arrayColores.push("white");
          }
        } catch (err) {
          console.error(err);
        }
      }
      setData(arrayElementos);
      setColors(arrayColores);
      setLoading(false)
    }
    fetchData(personajes);
  }, [personajes]);

  return (
    <>
      <div className="containerDetailsLC">
        {
          loading && (<span>cargando personajes...</span>) 
        }
        {data.map((item, index) => {
          const count = index + 1;
          const color = colors[index];
          return (
            <div key={index} className="cardContainerDetailLc">
              <p>{count} -</p>
              <Link to={`/characters/${item.id}`} className="linkCharacterDetail">
              <div className="nameStatus">
                <h5>{item.name}</h5>
                <h6>
                  <box-icon
                    type="solid"
                    name="circle"
                    color={color}
                    size="xs"
                    animation="flashing-hover"
                  ></box-icon>{" "}
                  {item.status}
                </h6>
              </div>
              </Link>
              <img src={item.image} alt="" className="imgLocationDetail" />
            </div>
          );
        })}
      </div>
    </>
  );
};
