import React from "react";

import { useFetch } from "../hooks/useFetch";
import FilmDetails from "./FilmDetails";

let Details = ({ category, id }) => {
  let url = `https://swapi.dev/api/${category}/${id}`;
  const { data, loading } = useFetch(url);

  //   console.log(data);
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <FilmDetails data={data} />
        </>
      )}
    </>
  );
};

export default Details;
