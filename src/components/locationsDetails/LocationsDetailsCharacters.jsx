import React, { useEffect, useState } from "react";
import {
  getCharacterById,
  getCharactersByUrl,
} from "../../services/ApiService";

import "../locationsDetails/LocationsDetails.css";

export const LocationsDetailsCharacters = ({ personajes }) => {
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    async function fetchData(array) {
      const arrayElementos = [];
      const arrayColores = [];

      for (const item of array) {
        try {
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
    }
    fetchData(personajes);
  }, [personajes]);

  return (
    <>
      <div className="containerDetailsLC">
        {data.map((item, index) => {
          const count = index + 1;
          const color = colors[index];
          return (
            <div key={index} className="cardContainerDetailLc">
              <p>{count} -</p>
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
              <img src={item.image} alt="" className="imgLocationDetail" />
            </div>
          );
        })}
      </div>
    </>
  );
};
