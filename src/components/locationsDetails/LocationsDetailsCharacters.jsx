import React, { useEffect, useState } from "react";
import {
  getCharacterById,
  getCharactersByUrl,
} from "../../services/ApiService";

export const LocationsDetailsCharacters = ({ personajes }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(array) {
      const arrayElementos = [];

      for (const item of array) {
        try {
          const res = await getCharactersByUrl(item);
          arrayElementos.push(res);
        } catch (err) {
          console.error(err);
        }
      }

      setData(arrayElementos);
    }
    fetchData(personajes);
  }, []);
  return (
    <>
      <div className="containerDetailsLC">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
              <figure>
                <img src={item.image} alt="" />
              </figure>
            </div>
          );
        })}
      </div>
    </>
  );
};
